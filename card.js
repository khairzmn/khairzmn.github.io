console.log("JS loaded");

var suits = ["Spade", "Clubs", "Diamonds", "Heart"];
var value = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var fred = {
    name: 'fred',
    phone: '123456',
    email: 'fred@gmail.com'
};

//var suitIndex = 0;
//var valueIndex = 0;

//Hold our cards
var deck = [];

/*
console.log('-----------------------------')
for (var i in fred) {
    console.log("key: %s, value: %s", i, fred[i]);
}
console.log(fred['name']);
console.log(value[1]);

console.log('\n-----------------------------')
for (var i in value) { 
    console.log("key = %s, value = %s", i, value[i]);
}
*/

var mkCard = function(s, v) {
    return ({
        suits: s,
        value: v
    });
}

for(var i in suits) {
    for (var j in value) { 
        deck.push( mkCard(suits[i], value[j]) );
        //deck.push({
            //suits: suits[i],
            //value: value[j]
        //});
    }
}

for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    for (var valueIndex = 0; valueIndex < value.length; valueIndex += 1) {
        deck.push({
            suits: suits[suitIndex],
            value: value[valueIndex]
        });
    }
}

//Outer look - suits
/*
while (suitIndex < suits.length) {
    valueIndex = 0;
    while (valueIndex < value.length) {
        //console.log("suiteIndex = " + suitIndex + ", valueIndex = " + valueIndex);
        //console.log("suitIndex = %d, valueIndex = %d", suitIndex, valueIndex);
        deck.push({
            suits: suits[suitIndex],
            value: value[valueIndex]
        });
        valueIndex += 1;
    }
    suitIndex += 1;
}
*/

console.log(deck);