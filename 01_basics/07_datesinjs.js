// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// // Months start with zero ; jan-0 ..... Dec-11
// let myCreatedDate = new Date(2025,0,3,7,8)
// formate- year,month,day,hour,minitues
// let myCreatedDate = new Date("2025-01-15")// YYYY-MM-DD or it can be DD_MM_YYY
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp/1000));
// console.log(myCreatedDate.getTime());
let newDate = new Date()
console.log(newDate.getMonth()+1)
newDate.toLocaleString('default',{
    weekday:"long",
})