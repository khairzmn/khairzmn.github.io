console.log("we're live now");

var coke = 99;
while (coke > 0) {
  var verse = [
    coke + " bottles of coke on the wall,",
    coke + " bottles of coke!",
    "Take one down, pass it around",  
    (coke - 1) + " bottles of coke on the wall!"
  ].join("\n");
 
  console.log(verse);
 
  coke--;
}