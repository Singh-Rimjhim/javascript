//-------------Comparison btw numbers----------------//
console.log(2 < 5); // true
console.log(2 > 5); // false
console.log(2 == 5); // false
console.log(2 != 5); // true
console.log(2 <= 5); // true
console.log(2 >= 5); // false
//-------------Comparison btw strings and numbers----------------//
console.log("2" < 5); // true
console.log("02" > 1); // true
//-------------Comparison with 0----------------//
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false   
console.log(undefined > 0); // false
//undefined aur 0 mein dono ka sb comparison false aa jata hai
// aise null undefined ye sb comparison use nh karna chahiye

// Strict comparison operator [===]
console.log(2 === 2); // true
console.log(2 === "2"); // false    
console.log(2 !== "2"); // true