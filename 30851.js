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


// Part 2
let array = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

array.sort((a,b) =>  a.age - b.age);
array = array.filter(a => a.age < 50);


let sumAge = array.reduce((sum, entry) => sum + parseInt(entry.age), 0)
let avgAge = sumAge / array.length


console.log(array)
console.log(sumAge)
console.log(avgAge)


//Part 3
let obj = {
  name: 'Jack', 
  job: 'accounting',
  age: 21
}

function ageChange(obj) {
  if (!obj.hasOwnProperty('age')){
    obj.age = 0;
  } else {
    obj.age++;
  }
  console.log(obj)
}
ageChange(obj)

const objClone = structuredClone(obj);

function cloneChange(objClone){
  if (!objClone.hasOwnProperty('age')) {
    objClone.age = 0;
  } else {
    objClone.age++;
  }
  console.log(objClone)
}

cloneChange(objClone)

