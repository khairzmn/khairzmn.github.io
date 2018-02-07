console.log("Function is Loaded");

var name = 'fred';

var person = {
    name: 'fred',
    tel: '82883210'
}

/*
var greet = function(name, phone) {
    console.log("Hello ", name);
    console.log("\tcall me ", phone);
}
*/
//rec is the formal parameter
var greet = function(rec) {
    console.log("Hello ", rec['name']);
    console.log("\tcall me ", rec['tel']);
    return 0;
}

var mkGreet = function(rec) {
    return ("Hello " + rec['name'] + "\tcall me " + rec['tel']);
}

//greet(person['name'], person['tel']);
//greet(person);
//actual parameter
greet({name: 'barney'});

console.log('typeof name = ', typeof name);
console.log('typeof greet = ', typeof greet);
