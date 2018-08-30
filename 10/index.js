const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));




// Why are functions special?
// Functions actually aren't all that special
// they act and behave just like any other object

// In places where we can use any other value, we can also place a function

// function sayHello() {
//     console.log("hello")
// }

// let anArray = ['aString', 'a second string', 55, true, sayHello]

// let anObj = {sayHello: sayHello}

// anObj.sayHello()

// anArray[4]()





// function sayHello(name) {
//     console.log("hello " + name)
// }


// sayHello("Alec")


// Passing functions into functions:

// function runsAFunction(fn, parameter) {
//     fn(parameter)
// }


// function sayHello(name) {
//     console.log("hello " + name)
// }

// runsAFunction(sayHello, "Alec")
// sayHello is a Callback to runsAFunction

// When we pass a function into another function, it is called a Callback Function


// let numbers = [1, 2, 3, 4, 5]

// function doesMath(numbers, operation) {
//     let newNums = []
//     for (let i = 0; i < numbers.length; i++){
//         newNums.push(operation(numbers[i]))
//     }
//     return newNums
// }


// function double(n) {
//     return 2 * n
// }

// let doubles = doesMath(numbers, double)

// console.log(doubles)

// let triples = doesMath(numbers, n => 3 * n)

// console.log(triples)



// Javascript does have some nice built in array methods, which are higher order functions


// .forEach
// Takes a function as a parameter
// this function has 1 mandatory parameter, and two additional optional paramters
// (elem, [index, arr])

// let anArray = [() => {console.log("say Hello")}, () => {console.log("say Goodbye")}, 5]

// let value = anArray.forEach((elem, indx) => {
//     // console.log(elem)
//     if (typeof elem === 'function'){
//         elem()
//     } else {
//         console.log(elem + " is not a function")
//     }

// })

// console.log(anArray)

// essentially what forEach is, is just another way of illustrating a for loop



// .map
// map is also an array method
// the callback function to map has the same signature as the callback function to forEach
// (elem, [index, arr]) =>
// map "maps" an array by the function that you pass to it



let anArray = [1, 2, 3, 4, 5]

let newArr = anArray.map(n => n * n)

console.log(newArr)

// map does not mutate our original array, but instead returns a new array

console.log(anArray)




