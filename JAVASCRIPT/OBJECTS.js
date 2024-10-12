// var carInfo = {make: "Toyota", year:1990, model: "camry"}
//
// console.log(carInfo);
//
// carInfo['year'] = 2006;
//
// for (key in carInfo){
//   console.log(key);
// }
//
// var myNewO = {a:"hello", b:[1,2,3],c:{inside:['a','b']}};
//
// console.log(myNewO['a']);
// console.log(myNewO['b'][1]);
// console.log(myNewO['c']['inside'][1]);


//OBJECT 2

// var simple = {
//   prop : "Hello",
//   myMethod : function() {
//     console.log("The myMethod was called");
//   }
// }
//
// console.log(simple);
// console.dir(simple);
//
// var myObj = {
//   name: "Oba",
//   greet: function() {
//     console.log("hello" + this.name);
//   }
// }


// OBJECT 3


//PROBLEM 1

// GIVEN THE OBJECT:

var employee = {
  name: "Oba Surveys"
  job: "Developer"
  age: 32
  namelength: function() {
    console.log(this.name.length);
  }
}



// Add a method called namelength that prints out then
// length of the employees name to the console



//Name is Oba Surveys, Job is Developer, Age is 32



//PROBLEM 2
var employee = {
  name: "Oba Surveys"
  job: "Developer"
  age: 32
  report: function() {
    alert("Name is "+this.name+", Job is: "+this.job+", age is: "+this.age);
  }
}


//Write program that will create an alert in the browser
//of each of the object's values for the key value parts. for
// example, it should alert




// PROBLEM 3

var employee = {
  name: "Oba Surveys"
  job: "Developer"
  age: 32
  lastName:function() {
    console.log(this.name.split("")[1]);
  }
}

// Add a method called lastName that prints out the employee's last name to the console
