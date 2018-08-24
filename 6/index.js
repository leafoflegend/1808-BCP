const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// Review of the splice method
// splice is a method called off of an array
// it takes 2 main parameters
// the first parameter is an index to start at 
// and the second parameter is the number of elements to splice out
// The third (and arbitrarily many other arguments) are added to the array at the position of the splice

// let anArray = ['a', 'b', 'c', 'd']

// let anotherArray = anArray.splice(1, 2)

// console.log(anotherArray)
// console.log(anArray)


// let anotherArray = anArray.splice(1, 0, "string")

// console.log(anotherArray)
// console.log(anArray)

// Splice can also be used to simulate push, pop, shift, and unshift

// let anArray = ['a', 'b', 'c', 'd']


// pop is the method which retrieves the last element in the array
// we could maybe use -1

// let anotherArray = anArray.splice(-1, 1)
// let poppedValue = anotherArray[0]

// console.log(poppedValue)
// console.log(anArray)


// push
// let anotherArray = anArray.splice(anArray.length, 0, "last value")

// console.log(anotherArray)
// console.log(anArray)


// shift
// let anotherArray = anArray.splice(0, 1)
// console.log(anotherArray)
// console.log(anArray)

// unshift
// let anotherArray = anArray.splice(0, 0, "first element")
// console.log(anotherArray)
// console.log(anArray)




// Join method
// join is another method called off of an array
// it "joins" the elements of the array together
// By default, join joins the array by a comma
// we can also specify a delimiter to join the array
// this delimiter is the argument to join

// Join does NOT mutate our original array

// let anArray = ['a', 'b', 'c', 'd']
// let aString = anArray.join()

// console.log(aString)
// console.log(anArray)


// split
// split is a method called off of a string
// and it splits a string into an array, by a specified delimiter

// console.log(aString.split(","))


// Concat method
// concat is called off of an array
// it takes an array as a parameter
// it concatenates the array passed in, onto the end of the array which it was called off of

// concat does not mutate our original array, it creates and returns a new array

// let anArray = ['a', 'b', 'c', 'd']


// // let anotherArray = anArray.concat([1, 2, 3, 4])
// let anotherArray = anArray.concat(1, 2, 3, 4)

// console.log(anotherArray)







// Nested arrays

// arrays are ordered collections of values
// if arrays can contain any values in them, they should also be able to contain arrays

// let aNestedArray = [["a", "b", "c"], ["d", "e", "f"]]


// for (let i = 0; i < aNestedArray.length; i++){
//     let innerArray = aNestedArray[i]
//     console.log("inner array: ", innerArray)
//     for (let innerArrayIndex = 0; innerArrayIndex < innerArray.length; innerArrayIndex++){
//         console.log(innerArray[innerArrayIndex])
//     }
// }

// The most common thing you will see nested arrays used for is grids, x-y coordinates, potentially matrices
// You will not typically see nested arrays which are not uniform


function createGrid(size, x, y) {
    
    let grid = []
    
    let row = []
    
    for (let i = 0; i < size; i++){
        row.push("e")
    }
    
    for (let j = 0; j < size; j++){
        grid.push(row.slice())
    }
    
    
    grid[x][y] = "X"
    
    return grid
}


let grid = createGrid(10, 4, 3)


function findTreasure(grid) {
    for (let i = 0; i < grid.length; i++){
        let row = grid[i]
        for (let j = 0; j < row.length; j++){
            if (row[j] === 'X'){
                return [i, j]
            }
        }
    }
    return false
}


console.log(findTreasure(grid))




