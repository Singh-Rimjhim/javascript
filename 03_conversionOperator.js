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


// ****************** Operations ****************** //
let value = 3
let negValue = -value
console.log(negValue); //-3

console.log(2+2); //4 [Addition]
console.log(2-2); //0 [Subtraction]
console.log(2*2); //4 [Multiplication]
console.log(2/2); //1 [Division]
console.log(2**3); //8 [Exponentiation(2^3)]
console.log(5%2); //1 [Modulus]

let str1 = "Hello"
let str2 = "-World"
let str3=(str1 + str2);
console.log(str3); //Hello-World

console.log("2" + 2); //22 [String Concatenation]
console.log("1" + 2 + 3); //123 [String Concatenation]
console.log(2 + 3 + "1"); //51 [String Concatenation]
console.log(2 + "1" + 3); //213 [String Concatenation]
// aise likhna nhi chahiye code ko braces mein ya line by line likhna chahiye


console.log(+true); //1 [Unary Operator]
console.log(-""); //-0 [Unary Operator]
//aise bhi nhi likhna chahiye koi mtlb nhi hota hai code ka readability kharab ho jati hai

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3); //4 4 4 [Assignment Operator]
//aise bhi nh likhna hai code ko readability kharab ho jati hai

let gameCounter = 100
++gameCounter; //pre-increment
console.log(gameCounter); //101