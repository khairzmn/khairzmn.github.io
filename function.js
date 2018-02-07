console.log ("loaded")

var name = "fred"
var tel = "999"

var greet = function(name) {
    console.log("Hello", name);
}

var greet = function (rec) {
    console.log ("Hello ", rec["name"]);
    console.log ("\t call me ", rec["tel"]);
    return 0;
} 

/* comment here */
