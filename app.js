var at = new ATJS("app.js");

//@ajax("data/data.json");
function doSomeAjax(data) {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@ajax</h2>";
	output.innerHTML += "<p>Hello " + data.name + "</p>";
	output.innerHTML += "<hr>";
};

//@inject("World");
function sayHelloTo(name) {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@inject</h2>";
	output.innerHTML += "<p>Hello " + name + "</p>";
	output.innerHTML += "<hr>";
};

//@mapToKey("32");
function sayFoo() {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@mapToKey</h2>";
	output.innerHTML += "<p>Foo</p>";
	output.innerHTML += "<hr>";
};

//@delay("1000");
function sayBar() {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@delay</h2>";
	output.innerHTML += "<p>Bar</p>";
	output.innerHTML += "<hr>";
};

//@mapToKey("13");
//@delay("2000");
function sayAlot(stuff) {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@mapToKey, @delay</h2>";
	output.innerHTML += " Alot ";
	output.innerHTML += "<hr>";
};

//@chainAfter("sayFoo");
function copyCat() {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@chainAfter</h2>";
	output.innerHTML += "<p>What He Said</p>";
	output.innerHTML += "<hr>";
};

//@chainBefore("sayFoo");
function simonSays() {
	var output = document.getElementById("output");
	output.innerHTML += "<h2>@chainBefore</h2>";
	output.innerHTML += "<p>Say what!</p>";
	output.innerHTML += "<hr>";

};


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
//priority

//inline annotations  /*@value("foo")*/ 