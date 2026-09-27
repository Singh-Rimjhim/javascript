const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345" 
//prefer not to use var because of issue in block scope & functional scope
accountCity = "Bhadohi"
let accountState; 
// agar kuchh value nhi denge to output mein undefined aayega

//accountId = 2 //Not allowed because accountId is a constant variable
accountEmail = "hc@hc.com" //allowed because accountEmail is a let variable
accountPassword = "67890" //allowed because accountPassword is a var variable
accountCity = "Lucknow"  //allowed because accountCity is a global variable

console.log(accountId) // console.log se outputdirect print hoga 
//console.table se output table format me aata hai
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// comment karne ke liye /*....*/ use karte hai Example:
/* 
    This is a multi-line comment
    It can span multiple lines
*/
