console.log ("live transmission");

var avengers = ["hulk", "batman", "thor", "ironman", "batman"];

//TASK 1
//use while statement to print out the element of the array
//one on each line
//it should work with an array of any length

// Hint: (1)while (2)console.log (3)length of array 
//       (4)var to keep track of which element you are at (5)increment

//console.log (avengers[0]);
//console.log (avengers[1]);
//console.log (avengers[2]);

var i = 0;

// while (i < avengers.length) {
    // console.log (">>> " + avengers[i]);
    // i += 1;  // i = i + 1;
//}

// to filter out value, you need: (1) if statement (2) ==

//TASK 2

while (i < avengers.length) {
    if (avengers[i] != 'batman') {
    console.log (i + " >>> " + avengers[i]);
}
i++;
}

//TASK 3
//ONLY PRINT OUT THE AVENGERS