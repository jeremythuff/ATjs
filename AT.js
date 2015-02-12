var ATJS = function(scriptLocation) {
	var self = this;
	
	self.scriptLocation = scriptLocation;
	self.findAnnotations();
	self.functions = {};

	return this;
	
}

ATJS.prototype = {
	test: function() {
		var output = document.getElementById("output");
		output.innerHTML += "Hello Test";
	},
	getRawDocument: function(cb) {

		var self = this;

		var request = new XMLHttpRequest();
		request.open('GET', self.scriptLocation, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
			    cb(request.responseText);
			} else {
				console.log("error");
			}
		};

		request.onerror = function() {
		  cosole.log("error");
		};

		request.send();

	},
	findAnnotations: function() {
		var self = this;
		self.getRawDocument(function(rawDocument) {

			var documentArray = rawDocument.split(";");

			for(var index in documentArray) {
				var line = documentArray[index];
				var lineMarker = line.trim().substring(0, 3);

				if(lineMarker == "//@") {
					var method = line.split("@")[1].substring(0, line.split("@")[1].indexOf("("));
					var atObj = {};
					
					self.findNextFunction(parseInt(index), documentArray, function(funcString){
						atObj.val = self.extractValue(line.split("@")[1]);
						atObj.funcString = funcString;
						atObj.funcName = atObj.funcString.substring(0, atObj.funcString.indexOf("(")).replace("function", "").trim();
					    
						if(!self.functions[atObj.funcName]) self.functions[atObj.funcName] = {};
						self.functions[atObj.funcName][method] = atObj;

						console.log(typeof(self[method]));
					    if(typeof(self[method])!=="undefined") {
					    	self[method](atObj);
					    } else {
					    	console.error("There is no annotation by the name " + method);
					    }
					});

					

				}
			}

		});
	},
	findNextFunction: function(thisLineNumber, documentArray, cb) {
		var self = this;
		
		if(documentArray[thisLineNumber].trim().substring(0, 8) == "function") {
			cb(documentArray[thisLineNumber].trim());
		} else {
			self.findNextFunction(thisLineNumber+1, documentArray, cb);
		}
	},
	inject: function(atObj) {
		window[atObj.funcName](atObj.val);		
	},
	mapToKey: function(atObj) {
		
		var value = atObj.val;
		
		window.addEventListener("keypress", function(e){
			if(e.charCode == parseInt(atObj.val)) window[atObj.funcName]();
		});



	},
	delay: function(atObj) {
		setTimeout(function() {
			window[atObj.funcName]()
		}, atObj.val);
	},
	ajax: function(atObj) {

		var self = this;

		var request = new XMLHttpRequest();
		request.open('GET', atObj.val, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
			    window[atObj.funcName](JSON.parse(request.responseText));
			} else {
				console.log("error");
			}
		};

		request.onerror = function() {
		  cosole.log("error");
		};

		request.send();

	},
	chainBefore: function(atObj) {
		//this should instead register as a before function the annotation manager
		window[atObj.funcName]();
		window[atObj.val]();	
	}, 
	chainAfter: function(atObj) {
		//this should instead register as an after function the annotation manager
		window[atObj.val]();
		window[atObj.funcName]();	
	}, 
	extractValue: function(str) {
		  var ret = "";

		  if ( /"/.test( str ) ){
		    ret = str.match( /"(.*?)"/ )[1];
		  } else {
		    ret = str;
		  }

		  return ret;
		}
}