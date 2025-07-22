// singleton - when ever object is created using constructor it will singleton when it is created using the literal it is not singleton

// object.create -- this is construct method using singleton objects are created 

// object literals
// objects has keys and pairs
// symbol creation 

const mysum = Symbol("key1")


const jsuser = {
    name : "Sai Narsimha",
    "Area" : "HYD",
    [mysum]: "mykey1",
    age : 18,
    email : "sainarsimha@gmail.com",
    isLoggedIn : false
}
console.log(jsuser.email)
console.log(jsuser["email"])
// if key is in double qotes then it should be accessed using the array way like obj_name["key_name"]
// Symbol is accessed also same as array way
console.log(jsuser[mysum])

// To change the values use objname.keyname=new value

jsuser.age=17

To lock the values 
Object.freeze(jsuser)
jsuser.age=23
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js User")
}
jsuser.greetingTwo = function(){
    console.log(`Hello js User,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())

/* -------------------- part-2 -------------------------*/

const tinderuser = new Object()
// console.log(tinderuser)
tinderuser.name="Vishnu"
tinderuser.id=2345
tinderuser.isLoggedIn=false;

// console.log(tinderuser)

const regularuser = {
    email : "ac@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vishnu",
            lastname : "M",
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1 : "a",2 :"b"}
const obj2 = {3 : "a",4 :"b"}
const obj4 = {5 : "a",6 :"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
// {} - this the target object 

const obj3 ={...obj1,...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    }
];

console.log(users[1].id)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("name"))