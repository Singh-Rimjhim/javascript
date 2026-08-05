let score = "33abc"

// const{score} = req.body

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score) //explicit conversion
console.log(typeof(valueInNumber)); //number    
console.log(valueInNumber); //NaN 
//NaN is a special number which is not a number
//33abc number mein convert nhi ho sakta lekin Number(score) se uska datatype change hoke number ho gaya lekin uska value NaN aa gaya
// agar sirf 33 hota to tb output mein NaN ki jgh 33 aata.
// null, undefined, false, "" ye sab number mein convert karne pe 0 aa jata hai
//true ko number mein convert karne pe 1 aa jata hai

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn) //explicit conversion
console.log(booleanIsLoggedIn); //false
//0, "", null, undefined ko boolean mein convert karne pe false aa jata hai
//1, "...." ko boolean mein convert karne pe true aa jata hai

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber); //string
console.log(stringNumber); //33