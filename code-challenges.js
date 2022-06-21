// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: This program will allow the user to check whether the temperature is below, at or above boiling point. 
// The parameters have already been declared via the challenge (temp1, temp2, temp3)
// create a function expression (boilPnt())
// create an if statement that evaluates if the given parameter is greater than 212
// have the function return the string "[The given parameter] is above boiling point"
// create an else if statement that evaluates if the given parameter is equal to 212
// have the function return the string "[TGP] is at boiling point"
// create an else if statement that evaluates if the give parameter is less than 212. 
// have the function return the string "[TGP] is below boiling point"
// console log new funtion with the challenge parameters.

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilPnt = (temp) => {
    if(temp > 212) {
        return `${temp} is above boiling point`
    } else if(temp == 212) {
        return `${temp} is at boiling point`
    } else if(temp < 212) {
        return `${temp} is below boiling point`
    } else {
        return "Sorry, invalid input"
    }
    }
console.log(boilPnt(temp1))
console.log(boilPnt(temp2))
console.log(boilPnt(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: This program will allow the user to combine two given arrays into a variable and return the length of the new variable. 
// create a function expression. (howLong)
// create a variable. (c)
// within the variable, use the concat method to merge the given parameters. 
// have the function console log the result of new variable with the length property applied.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let howLong = (a, b) => {
    c = [].concat(a, b)
    console.log(c.length)
}
howLong(myNumbers1, myNumbers2)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: This program will allow the user to reverse the letters of a given string and return the result to the user.
// create a function expression. (bkwrd)
// create a function to divide the string into substrings, reverse the order of those substrings, and combine those substrings. 
// create an expression to represent aforementioned function and return the result. 
// console log function to run in terminal.

const currentCohort = "Delta 2022"

let bkwrd = (val) => {
    return val.split("").reverse().join("")
}
console.log(bkwrd(currentCohort))




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: This program will allow the user to evaluate the index of a given array and return whether the index value is an even or odd number. 
// create a function expression that will evalute array (oddEven) 
// create a for statement within that function beginning at the 0 index, ending at the index length of the given array, and will count up by 1 increment. 
// create an if statement within the for statement that will evaluate if the remainder of the specified index is equal to 0. 
// have the function console log "even" if the evaluation is true.
// create an else if statement that will evaluate if the remainder of the specified index is not equal to 0. 
// have the function consol log "odd" if the evaluation is true. 
// console log function to run in terminal.

const myArray = [13, 34, 5, 10, 27, 42]

let oddEven = (val) => {
    for(let i = 0; i < val.length; i++) {
        if([i] % 2 == 0) {
            console.log("even")
        }else if([i] % 2 !== 0) {
            console.log("odd")
        }
    }
}
console.log(oddEven(myArray))     



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: This program will allow the user to evaluate two parameters and return the result of the smaller parameter subtracted from the larger parameter. 
// create a function expression that will take the parameters and find the subtracted result. (bigMinus)
// create an if statement within the function that will evaluate if the first parameter is less than the second parameter
// have the function console log the result of the firsts parameter subtracted from the second parameter if the statement is true.
// create an else statement that console logs the result of the second parameter subtracted from the first parameter.

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

let bigMinus = (a, b) => {
    if(a < b) {
        console.log(b - a)
    }else {
        console.log(a -b)
    }
    }
bigMinus(number1, number2)
bigMinus(number1, number3)
bigMinus(number1, number4)
