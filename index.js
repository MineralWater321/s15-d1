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
let juan = "juan";

//Equality operator (==)
// - checks whether the operands are equal/have the same content
// - returns a boolean value

console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);
console.log('juan' == 'juan');
console.log('juan' == juan);

//Inequality operator (!=)
// - checks whether the operands are not equal/have different content
/*
console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);*/

//Strict equality operator (===)
console.log("With Strict Equality Operator");
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');
console.log('juan' === juan);

//Strict inequality operator (!==)
console.log("With Strict Equality Operator");
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);
console.log('juan' !== 'juan');
console.log('juan' !== juan);

//Logical Operators 
let isLegalAge = true;
let isRegistered = false;

//Logical AND Operator (&& - Double ampersand)
// Returns true if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirementsMet);

//Logical OR Operator (|| - Double Pipe)
// Returns true if one of the operands are true
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " + someRequirementsMet);

//Logical NOT Operator (! - Exclamation Point)
//Returns the opposite value (Negates the value)
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT operator: " + someRequirementsNotMet);

/* Relational Operators
	<  - Less than
	>  - Greater than
	<= - Less than or equal to
	>= - Greater than or equal to

	let a = 5;
	let relate = a > 8;
	console.log(relate);
*/
//Selection Control Structures
// if, else if and else statement

let numG = -1;

//if Statement - executes a statment if a specified condition is true
/* Syntax:
	if(condition){
		statement/s;
	}
*/

if(numG < 0){
	console.log("Hello");
}

let numH = -1;
// else if Clause - executes a statement if previous conditions are false and if the specified condition is true

if (numG > 0){
	console.log("Hello");
}

else if(numH == 0){
	console.log("World");
}

else if(numH > 0){
	console.log("Solar System");
}

//else Statement - executes a statement if all other conditions are false
if(numG > 0){
	console.log("Hello");
}
else{
	console.log("Try again")
}

/*
	Department A = 1 - 3
	Department B = 4 - 6
	Department C = 7 - 9
*/

let dept = 4;

if(dept >= 1 && dept <= 3){
	console.log("You're in Department A");
} else if(dept >= 4 && dept <= 6){
	console.log("You're in Department B");
} else if(dept >= 7 && dept <= 9){
	console.log("You're in Department C");
} else {
	console.log("Department does not exist");
}

let message = "No message";
console.log(message);

function determineTyphoonIntensity(windSpeed){
	if(windSpeed < 30){
		return "Not a typhoon yet.";
	} else if(windSpeed < 61){
		return "Tropical Depression detected.";
	} else if(windSpeed >= 61 && windSpeed <= 88){
		return "Tropical storm detected.";
	} else if(windSpeed >= 89 && windSpeed < 117){
		return "Severe tropical storm detected.";
	} else{
		return "Typhoon detected.";
	}
}

message = determineTyphoonIntensity(66);
console.log(message);

//Truthy and Falsy
//In JS a "truthy" value is a value that is considered true when encountered in Boolean context
/* Falsy values
	1. false
	2. 0
	3. -0
	4. ""
	5. null
	6. undefined
	7. Nan
*/

if(true){
	console.log('Truthy');
}

if(1){
	console.log('Truthy');
}

//falsy example
if(false){
	console.log('Falsy');
}
if(0){
	console.log('Falsy');
}
if(undefined){
	console.log('Falsy');
}

//Single statement execution
//Conditional Ternary Operator
/* Syntax
	(expression) ? ifTrue : ifFalse;
*/
let ternaryResult = (1<18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult);

let name;

function isOfLegalAge(){
	name = 'John';
	return 'You are of the legal age limit';
}

function isUnderAge(){
	name = 'Jane'
	return 'You are under the age limit';
}

let age = parseInt(prompt("What is your age?"));
console.log(age);
let legalAge = (age >= 18) ? isOfLegalAge() : isUnderAge();
console.log("Result of Ternary Operator Functions: " + legalAge + ", " + name);

//Switch statement
/* Syntax
	switch(expression){
		case value1:
			statement/s;
			break;
		case value2:
			statement/s;
			break;
		case valueN:
			statement/s;
			break;
		default:
			statement/s;
	}
*/
// toLowerCase() method transform the text to lower case form
let day = prompt("What day of the week is it today?").toLowerCase();
console.log(day);

switch(day){
	case 'monday':
		console.log("The color of the day is red");
		break;
	case 'tuesday':
		console.log("The color of the day is orange");
		break;
	case 'wednesday':
		console.log("The color of the day is yellow");
		break;
	case 'thursday':
		console.log("The color of the day is green");
		break;
	case 'friday':
		console.log("The color of the day is blue");
		break;
	case 'saturday':
		console.log("The color of the day is indigo");
		break;
	case 'sunday':
		console.log("The color of the day is violet");
		break;
	default:
		console.log("Please input a valid day");
}

//Try-Catch-Finally Statement
// try catch statement are commonly used for error handling
//finally block is used to specify a response/action that is used to handle/resolve errors

function showIntensityAlert(windSpeed){
	try{
		alerat(determineTyphoonIntensity(windSpeed));
	}
	catch (error){
		console.log(error);
	}
	finally{
		alert('Intensity updates will show new alert.');
	}
}

showIntensityAlert(56);