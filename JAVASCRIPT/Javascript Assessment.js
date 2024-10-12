// codingbat.com

// sleepIn(false, true) ->true
// sleepIn(true, false) ->false
// sleepIn(false, true) ->true

function sleepIn(weekday, vacation) {
  return (!weekday || vacation)
}

// PROBLEM 2: MONKEY TROUBLE

// monkeyTrouble(true, true) -> true
// monkeyTrouble(false, false) -> true
// monkeyTrouble(true, false) -> false

function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

// PROBLEM 3: STRING TIMES

// Example input and output:

//stringTimes("Hi", 2) -> "HiHi"
//stringTimes("Hi", 3) -> "HiHiHi"
//stringTimes("Hi", 1) -> "Hi"

function stringTimes(str, n) {
  var returnstr = "",
  var i = 0;
  while (i<n) {
    returnstr += str
    i++
  }
  return returnstr
}


// PROBLEM 4: LUCKY SUM

// Example input and output

// luckySum(1, 2, 3) -> 6
// luckySum(1, 2, 13) -> 3
// luckySum(1, 13, 3) -> 1


function luckySum(a, b, c) {
  if (a === 13){
    return 0
  }else if (b === 13) {
    return a
  }else if (c === 13) {
    return a + b
  }else {
    return a+b+c
  }
}


// caught_speeding(60, false) -> 0
// caught_speeding(65, false) -> 1
// caught_speeding(65, true) -> 0

function caught_speeding(speed, is_birthday){
  if (is_birthday) {
    speed -= 5
  }
  if (speed <= 60) {
    return 0
  }
  if (60 < speed <= 80){
    return 1
  }
  return 2
}




//makeBricks(3, 1, 8) -> true
//makeBricks(3, 1, 9) -> false
//makeBricks(3, 1, 10) -> true

function makeBricks(small, big, goal){
  return goal%5 >=0 && goal%5 - small <= 0 && small + 5*big >= goal ;
}


//ARRAYS
