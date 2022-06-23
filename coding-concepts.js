// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The .length function returns the length of a given object.
console.log(cohort.length)


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The brackets return the specific index of the property name.
console.log(greeting[4])


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Index is defined by 1. Therefore, the 1 position in the array is returned when using index as a parameter.
console.log(languages[index])


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Error
// b) Verify and explain: This code results in error because the toUpperCase method only evaluates string values. Verification will not be ran, as the error will not allow the next question to verify and I have yet to find a way around that. Sorry for the inconvenience. 



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: the typeof function returns the data type of a given object.
console.log(typeof dataTypes.length)
