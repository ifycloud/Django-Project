// Alright so we've discussed the way you can grab html elements,
// see how we can interact with them in javascript!

// Type this into your console

//GRAB THE HEADER WITH H1
var header = document.querySelector("h1")


//Then you can interface with the object.

//Interface with the style.
// You will see a ton of options show up!

header.style.color = 'red'

//Now let connect it to the script to change it
//once every second to a random color!

//Random Color Function:
//
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Simple function for clarity
function changeHeaderColor() {
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseconds):
setInterval("changeHeaderColor()",500);
