// In case of var even though it is declare in a block it will act visible in the entire code 
//  var c=500
 if(true){
    let a=1
    const b=2
     var c=50
 }
 console.log(c)
//  console.log(b)
//  console.log(a)

 // As you can see that here c is declared in the if block the scope should be limited to it only but it exists is coming after the block which may lead to problems 
 // But in case of let and const there will No issue as var
// b is not defined 
// a is not defined 
// if the a has been declared out side block and it has value then that value be printed if no modifiction are done 
// if you declare sme variable in any block and intialize it with different value then it will not effect the global value 

for(let i=0;i<1;i++){
    console.log(1)
}


