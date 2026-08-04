"use strict"; //treat all JS code as newer version

//alert(3 + 3) //alert is used to show output in popup window
//we are using nodejs not browser so we will use console.log to show output not alert

console.log(3 + 3); console.log("Hello World"); 
//aise likhne se output aa jayenge lekin code readiability kharab ho jayegi isliye alag alag line mein likhna chahiye

let name = "Jhalak"; //string datatype
let age = 18; //number datatype
let isLoggedIn = false; //boolean datatype


        //------Data Types in JS------//
//Range of number in JS is -2^53 to 2^53
//BigInt is used to store number beyond this range
//String is written in double quotes
//Boolean is used to store true or false value
//Null is used to store empty value it ia a standalone value
// Undefined is used to store value which is not defined yet
//symbol is used to store unique value which is not equal to any other value
//object is used to store key value pair data
 

//typeof is used to check the datatype of variable
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined