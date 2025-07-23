function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("I")
}

// sayMyName
// parameters 
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    return number1+number2
}
// Arguments
const val =addTwoNumbers(3,15)

// console.log("result : ", val)


function loginUserMessage(username="Sai"){ // If you want to add the default values 
    if(!username){//username==undefined
        console.log("Please enter the Username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishnu"))


function calculatecartprice(val1,val2,...num1){
    return num1;
}

// console.log(calculatecartprice(200,300,400,500,600,700)) // to take all the values we gone use the spread operator 
// which is denoted by three dots followed by var_name - ...val it will all the values which passed in arguments which don't have unique parameters they will be in form of the array

const user = {
    username : "Sai",
    price : 2500
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

const mynewArr = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(mynewArr))