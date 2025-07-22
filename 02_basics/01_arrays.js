// Array can have hetrogenous values 
const newArr = new Array(1,2,34,5)
console.log(newArr)
// or it can be done as const Arr= [1,2,34,5]
 

Array methods

newArr.push(6)
// newArr.pop()
const newAr = new Array(1,2,34,5)
// newAr.shift()
const isLargeNumber = (element) => element > 13;
console.log(newAr.findIndex(isLargeNumber))
// when we use join it will convert them into the String 

// slice,splice

let mynum1 = newAr.slice(1,2)
console.log("A",newAr)
console.log(mynum1)

let mynum2 = newAr.splice(1,2)
console.log("B",newAr)
console.log(mynum2)
console.log(mynum2.lastIndexOf(2))
// --------------part-2-------------------//
// concat will return new Array
// push will add it as new element in the array 
// we can also use spread operator 

const Arr1=[1,2,3]
const Arr2=[4,5,6]
// const newArr = Arr1.concat(Arr2)
// Arr1.push(Arr2)
// console.log(Arr1)

// Let us see spread
 const newArr = [...Arr1,...Arr2]
//  console.log(newArr)
 const tarr =[1,2,3,4,[5,6,7],[8,9,[10,11]]]
 const realarr = tarr.flat(Infinity)
 console.log(realarr)
console.log(Array.isArray([1,2,3]))
console.log(Array.isArray("123"))
console.log(Array.from("Narsimha"))
console.log(Array.from({name : "Narsimha"})) // interesting
// Both of and from used for converting them to Arrays
let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))

