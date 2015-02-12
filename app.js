var at = new ATJS("app.js");

//@ajax("/some/rest/service");
function doSomeAjax(data) {
	console.log(data);
};

//@inject("World");
function sayHelloTo(name) {
	var output = document.getElementById("output");
	output.innerHTML = "<p>Hello " + name + "</p>";
};

//@mapToKey("32");
function sayFoo() {
	var output = document.getElementById("output");
	output.innerHTML += "<p>Foo</p>";
};

//@delay("1000");
function sayBar() {
	var output = document.getElementById("output");
	output.innerHTML += "<p>Bar</p>";
};

//@mapToKey("13");
//@delay("2000");
function sayAlot(stuff) {
	var output = document.getElementById("output");
	output.innerHTML += " Alot ";
};

//@chainAfter("sayFoo");
function copyCat() {
	var output = document.getElementById("output");
	output.innerHTML += "<p>What He Said</p>";
}


//chainBefore
//chainAfter
//value
//registerCallback
//conditionalTo
//interval
//iterate
//PipeTo
//log
//ajax
//MapToClick

//controller
//config
//model
//view
//change inject to take a reference to a function

//inline annotations  /*@value("foo")*/ 