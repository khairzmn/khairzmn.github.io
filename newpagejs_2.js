// valid JS variable name
// starts with either character A-Z or underscore or $
// eg.$money
// followed by one or more of the following:
// A-Z, a-z, _, $, 0-9,


//var car = {
    //make: 'Honda',
    //drive: '4W',
    //price: 100000,
    //validDrivers: [ 'fred', 'wilma' ]
    //first_name: "fred",
//}

//console.log("car make = ", car['make']);
//console.log("car make = ", car['first-name']);

var fred = {
    name: 'fred',
    email: 'fred@gmail.com',
}

var wilma = {
    name: 'wilma',
    email: 'wilma@gmail.com',
}

var flintstones = [ fred, wilma ];

//print out the email addresses of the flintstones

console.log(flintstones);
console.log(flintstones[0]['email']);

var i = 0;
while (i < flintstones.length) {
    console.log("email: " + flintstones[i]["email"]);
    i++;
}

//assigment = use JS to create a deck of cards