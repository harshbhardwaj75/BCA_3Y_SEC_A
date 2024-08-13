// datatypes is js is only 3 "LET","CONST","VAR".
// operators
let a =  10;
let b = 5;
let sum = a+b;//ARTHIMETIC
let diff = a-b;//SUBTRACTION
let product = a*b;//MULTIPLY
let quotient = a/b;//DIVIDE
let remainder = a%b//MODULUS
let isequal = (a==b)//EQUAL OPEERATOR
let isnotequal = (a!=b)//NOT EQUAL
let isgreater = (a>b)
let logicaland = (a>b && b>a)//relational
let ternary = (a==b)? "equal" : "notequal"//ternary
document.write(`the sum of ${a} and ${b} is ${sum} <br>`)
document.write(`the diff of ${a} and ${b} is ${diff} <br>`)
document.write(`${a} and ${b} is equal or not ${isequal} <br>`)
document.write(`${a} and ${b} is equal or not ${ternary} <br>`)

// USER INPUT IN JS
let h = prompt("enter value")
let c = prompt("enter second value")
let isGreater = (h>c)? `${h} is greater` : `${c} is greater`
document.write(isGreater)
// console.log is not used to print or show output on browser window it show output in console option in inspect mode.
console.log(isGreater)










