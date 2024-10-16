var player1 = prompt("Player One: Enter Your Name, you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row, col:");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function getColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
  for (var row = 5; row > -1; row--) {
    var colorReport = getColor(row, colIndex);
    if (colorReport === 'rgb(128, 128, 128)') { // Assuming this is the color of an empty cell
      return row;
    }
  }
}

function colorMatchCheck(one, two, three, four) {
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Check for Horizontal wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(getColor(row, col), getColor(row, col + 1), getColor(row, col + 2), getColor(row, col + 3))) {
        console.log('Horizontal Win');
        reportWin(row, col);
        return true;
      }
    }
  }
  return false;
}

// Check for Vertical wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(getColor(row, col), getColor(row + 1, col), getColor(row + 2, col), getColor(row + 3, col))) {
        console.log('Vertical Win');
        reportWin(row, col);
        return true;
      }
    }
  }
  return false;
}

// Check for Diagonal wins
function diagonalWinCheck() {
  // Downward-right diagonals
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(getColor(row, col), getColor(row + 1, col + 1), getColor(row + 2, col + 2), getColor(row + 3, col + 3))) {
        console.log('Downward Diagonal Win');
        reportWin(row, col);
        return true;
      }
    }
  }
  // Upward-right diagonals
  for (var row = 5; row > 2; row--) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(getColor(row, col), getColor(row - 1, col + 1), getColor(row - 2, col + 2), getColor(row - 3, col + 3))) {
        console.log('Upward Diagonal Win');
        reportWin(row, col);
        return true;
      }
    }
  }
  return false;
}

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1 + ", it is your turn. Pick a column to drop in!");

$('.board button').on('click', function() {
  var col = $(this).closest('td').index();
  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail, col, currentColor);

  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $('h1').text(currentName + " has won!");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  } else {
    currentPlayer = currentPlayer * -1;

    if (currentPlayer === 1) {
      currentName = player1;
      $('h3').text(currentName + ", it is your turn.");
      currentColor = player1Color;
    } else {
      currentName = player2;
      $('h3').text(currentName + ", it is your turn.");
      currentColor = player2Color;
    }
  }
});
