// console.log('Connected');

//Restart Game button
var restart = document.querySelector("#b");
// Grabs all the Squares
var squares = document.querySelectorAll('td');

//Clear all the Squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);


// Check the square marker

//STEP ONE

// var cellOne = document.querySelector('#one')
//
// cellOne.addEventListener('click', function() {
//   if (cellOne.textContent === '') {
//     cellOne.textContent = 'X';
//   }else if (cellOne.textContent === 'X') {
//     cellOne.textContent = 'O';
//   }else {
//     cellOne.textContent = '';
//   }
// })


//STEP TWO

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}


//for loop to add event listeners to all the squares

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
