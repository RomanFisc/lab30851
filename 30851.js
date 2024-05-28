// Part 1

//1. function that sums an array

//make array
// set sum to 0
// loop function to iterate over array and add to sum
// return sum

let numArr = [1, 2, 3, 7]

function sumArr(){
  let finalSum = 0
  for (let num = 0; num < numArr.length; num++){
    finalSum += numArr[num]
  }
  console.log(finalSum)
}

sumArr()

// take an array of numbers and return the average 
// set sum to 0 
// loop over function to add to some 
// divide sum by last index of array 

function avgArr(){
  let avg = 0
  for (let num = 0; num < numArr.length; num++){
    avg += (numArr[num]) / numArr.length
  }
  console.log(avg)
}

avgArr();


//take an array of strings and return the longest string
//create array
//loop over string 
//if string is bigger than 0 it becomes short, if next string is bigger then it becomes short, until looped through
//return longest

strArr = ['Test','Testedfkhdkgjdsr','Tester123', 'hi', 'sun']

function longStr(){
  let short = 0;
  let longest; 
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i].length > short) {
      short = strArr[i].length;
      longest = strArr[i];
    }
  }
  console.log(longest)
}
longStr()

//take an array of strings and a number and return an array of the strings that are longer than the given number
//just use the last function but set short to 3 and the return parameters to if its longer than short

function setStr (){
  let num = 3;
  let longer = [] 
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i].length > num) {
      longer.push(strArr[i])
    }
  }
  console.log(longer)
}
setStr()

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
//create function
// for loop if number is less than number add it to array
// return array

function isLess() {
  let num = 10
  lessArr = []
  for (let i = 1; i < num; i++){
    lessArr.push(i)
  }
  console.log(lessArr)
}

isLess()