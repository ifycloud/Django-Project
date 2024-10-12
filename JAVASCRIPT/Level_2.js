//FUNCTION

function hello(name){
  console.log("Oba developer!"+name);
}

function addNum(num1,num2) {
  console.log(num1+num2);

}

//DEFAULT PARAMETERS

function helloSomeone(name = "ifeanyi") {
  console.log("hello"+ name);

}


function formal(name="Sam", title="Sir") {
  console.log(title + " " + name);
}

function timesFive(numInput) {
  // local scope to the function!
  var result = numInput * 5
  return result
}


// Global scope

var v = " GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
  console.log(v)
  stuff = "Reassign stuff inside function"
  console.log(stuff)


fun();
console.log(stuff)
