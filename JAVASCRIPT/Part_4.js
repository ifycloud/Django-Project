// FOR LOOPS

// var word = "ABCDEFGHIK"
//
// for (var i = 0; i <word.length; i++){
//   console.log(word[i]);
// }
//
// alert("Done!")
//
//
// // while LOOPS
//
// var x = 0;
//
// while (x<5){
//   console.log("hello");
//   x++
// }
//
// for (var i = 0; i < 5; i++){
//   console.log("hello with for loop");
// }
//
//
// var num = 1;
//
// while (num<25) {
//   if (num%2 !== 0){
//     console.log(num);
//   }
//   num++
// }

// // For Loops
// for (var i = 0; i < 5; i++) {
//   if (i%2 !==0) {
//     console.log(i);
//
//   }
// }


// JAVASCRIPT PROJECT 1

var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("How Old are you?  ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet name? ")
alert("Thank You so much for the information!")


//LOGIC
//Four Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//NAME Conditions

if (firstName[0] === lastName[0]) {
  nameCond = true;
}else {
  nameCond = false;
}


//AGE CONDITIONS

if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}


//HEIGTH CONDITIONS

if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

// PET Name

if (petName[petName.length-1] === "y") {
  petCond = true;
}else {
  petCond = false;
}


//CHECK ALL CONDITIONS

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome SPY!");
}else {
  console.log("Nothing to see here");
}
