/*

STRINGS:
    "Evandro" = Double quotes / Aspas duplas
    'Mayk' = Single quotes / Aspas simples

NUMBERS:

    10  = Number without decimals / Número sem decimal 
    9.8 = Number with decimals / Número com decimal
*/

// Names of the Students:
const student01 = 'Evandro'; //String
const student02 = 'Mayk' //String
const student03 = 'Carlos' //String

// Grades of the Students:
const studentgrade01 = 5.8; // Number
const studentgrade02 =  5.00;  // Number
const studentgrade03 = 2;  // Number

// Calculating the average:
const average = (studentgrade01 + studentgrade02 + studentgrade03) / 3;


// Check if the student will pass or not, (conditions "if" and "else").
if(average > 5) {
    console.log(` The average is ${average}. Congrats, you are approved.` ); // Template String 
} else {
    console.log(` The average is ${average}. Sorry, you are not approved.` ); // Template String 
};

console.log(average);
