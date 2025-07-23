/* when we print console.log(this) in brwoser it will give 
the windows as output but when you run here it will be empty set {} like this
because there windows is a global object  and here {} it is the global object */ 

const user = {
    username : "Sai",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcone to the website`)
        console.log(this) // gives output as whole use object 
    }
}
// user.welcomeMessage()
// user.username="vishnu"
// console.log(this) // gives output as {}
// user.welcomeMessage()

// function chai(){
//     let username = "Sai" // this cann't be used in functions
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Sai"
//     console.log(this.username) // this will also give undefined as output 
// }

// chai()

// arrow function ()=>{}
const chai = () => {
    let username = "Sai"
    console.log(this.username) // this will also give undefined as output 
    console.log(this) // output is {}
}

// chai()

// implicent return  functions here there is no need of the return statement and it will one line 
// when it is in {} there should be return statement if it is in () there is no need of the return stmt 

// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => ({username : "Sai" })
// To return objects there should be paranthesis 

// console.log(addTwo(3,15))

const myArr =[2,3,4,5]

// myArr.forEach()



