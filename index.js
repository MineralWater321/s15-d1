// Operators

//Assignment Operators
//Basic Assignment Operator (=)
let assignmentNumber = 8;

assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

//Addition Assignment Operator (+=)
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

//Subtraction/Multiplication/Division Assignment Operator (-=, *=, /=)

//Arithmetic Operators +, -, *, /, %(Modulo)
let	x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of difference operator: " + difference);

let product = x * y;
console.log("Result of product operator: " + product);

let quotient = x / y;
console.log("Result of quotient operator: " + quotient);

// Modulo (%) returns the remainder
let modulus = x % y;
console.log("Result of modulus operator: " + modulus);

//Multiple Operators and Parentheses

let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation: " + mdas);

let pemdas = 1 + (2 - 3) * (4 / 5);
console.log("Result of pemdas operation: " + pemdas);

//Increment and Decrement
let z = 1;

//Pre-increment
let increment = ++z;
console.log("Result of pre-increment: " + increment);
console.log("Result of pre-increment: " + z);

//Post-increment
// The value of "z" is returned and stored in the variable "increment" then the value of "z" is increased by one
increment = z++;
console.log("Result of post-increment: " + increment);
console.log("Result of post-increment: " + z);

//Pre-decrement
let decrement = --z;
console.log("Result of pre-decrement: " + decrement);
console.log("Result of pre-decrement: " + z);

//Post-decrement
decrement = z--;
console.log("Result of post-decrement: " + decrement);
console.log("Result of post-decrement: " + z);

//Type Coercion
// - type coercion in the automatic or implicit conversion of values from one data type to another

let numA = "10";
let numB = 12;
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numE = true + 1;
console.log(numE);

let numF = false + 1;
console.log(numF);

//Comparison Operators