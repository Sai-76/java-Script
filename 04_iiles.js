// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() :- 1st () indicates function defination
// 2nd ( indicates calling)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
