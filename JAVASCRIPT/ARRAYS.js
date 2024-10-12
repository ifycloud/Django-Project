// PART 4 ARRAY EXERCISE

//Create Empty student Roster ARRAY
// This has been done for you!
var roster = []

// Create the function for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a Name
// and uses .push to add a new student to the array.

function addNew() {
  var newName = prompt("What name would you like to add?")
  roster.push(newName)
}


//REMOVE student

//Create a function called REMOVE that takes in a name
// finds its index location, then removes that name from the Roster
// MOZILLA DEVELOPER NETWORK

function remove() {
  var remName = prompt("what name would you like to remove?")
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}


//DISPLAY Roster

// Create a function called display that prints out the onster to the console.

function display() {
  console.log(roster);
}


// Start by asking if they want to use the web app


// Now create a while loop that keeps asking for an action (add, remove, display or quit)
// Use if and else if statements to excute the correct function for each command

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start === 'y') {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove,display, or quit.")
    if (request === 'add') {
      addNew()
    }else if (request === 'display') {
      display();
    }else if (request === 'remove') {
      remove();
    }else {
      alert("Not recognized")
    //  request = "quit"
    }
  }
}
alert("Thanks for using the web App! Please refresh to start over!")
