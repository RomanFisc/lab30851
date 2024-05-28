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
//return the string thats the longest 

strArr = ['Test','Tester','Tester123']

