//console.log("Jhalak") 

/*
 Lesson 1 Practice
Create these four variables:
name
age
college
isStudent

Give them appropriate values and print all four.
For example, your output should look something like:
Rimjhim
19
ABC College
true
*/
//-----------ANSWER-------------//
// let name = "Rimjhim";
// let age = 19;
// let college = "ABESEC";
// let isStudent = true;
// console.log(name);
// console.log(age);
// console.log(college);
// console.log(isStudent);

/*------------🧪 Your Lesson 2 Practice-----------
Question 1
a = 25
b = 4

Print:
- addition
- subtraction
- multiplication
- division
- remainder

Question 2
Create:
let score = 50;
Increase the score by 10 using +=.
Then decrease it by 5 using -=.
Print the final score.

Question 3 ⭐
Predict the output before running it:
let a = 10;
let b = "20";
console.log(a + b);
*/
//----------------ANSWERS----------------//
//1.
// let a= 25;
// let b = 4;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
//2.
// let score = 50;
// score += 10;
// score -=5;
// console.log(score);
//3.
//Answer:-1020 because of string concatenation

/*-------------📝 Lesson 3 Practice---------------
Question 1
Predict the output:
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 === "10");
console.log(10 !== 5);

Question 2
Create:
let age = 19;
Write conditions to check:
1. Is age greater than 18?
2. Is age less than or equal to 25?
3. Is age exactly 19?

Question 3 ⭐
Predict this:
let marks = 75;
let attendance = 80;
console.log(marks >= 40 && attendance >= 75);
console.log(marks >= 90 || attendance >= 75);

Question 4 🧠
What will this produce?
console.log(!(10 > 5));
*/

//---------ANSWERS------------//
//1.
// True 
//False
//True
//False
//True
//2.
//true
//true
//False
//3.
//true
//true
//4.
//false

/*-----------🧪 Lesson 4 Practice----------------
Question 1
Write a program:
If number is greater than 0
→ print "Positive"
Otherwise
→ print "Not Positive"
Use:
let number = -5;

Question 2
Write:
If age >= 18
→ "Eligible"
Otherwise
→ "Not Eligible"
Use:
let age = 17;

Question 3 ⭐
Write a grading program:
90 or above → A
75–89       → B
60–74       → C
40–59       → D
below 40    → F
Use:
let marks = 83;

Question 4 🧠 Dry Run
Don't run this first. Tell me what it will print:
let x = 15;
if (x > 20) {
    console.log("A");
} else if (x > 10) {
    console.log("B");
} else {
    console.log("C");
}
*/

//----------ANSWER-----------//
//1.
let number = -5;
if(number>0){
console.log("Positive");
}else{
    console.log("Not Positive");
}

//2.
let age = 17;
if(age>=18){
    cponsole.log("Eligible");
}else{
    console.log("Not Eligible");
}

//3.
let marks = 83;
if(marks>=90){
    console.log("A");
}else if(marks>=75){
    console.log("B");
}else if(marks>=60){
    console.log("C");
}else if(marks>=40){
    console.log("D");
}else{
    console.log("E");
}

//4.:- B