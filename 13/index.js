const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));






// function logsAnArray(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (!Array.isArray(arr[i])) {
//             console.log(arr[i])
//         } else {
//             logsAnArray(arr[i])
//         }
//     }
// }

// function logsAnArray(arr) {
//     if (!arr.length){
//         return;
//     }
//     let firstElement = arr.shift()
//     if (Array.isArray(firstElement)){
//         logsAnArray(firstElement)
//     } else {
//         console.log(firstElement)
//     }
//     logsAnArray(arr)
// }


// logsAnArray([1, 2, [[3, 4]], 5])





// console.log(['a', ['b', 'c'], 'd'].join('$'))

// function nestedJoin(arr, delimiter = ',') {
//     let joinedValue = ''
//     arr.forEach((element, indx) => {
//         let d = delimiter
//         if (indx === arr.length - 1){
//             d = ''
//         }
//         if (Array.isArray(element)){
//             joinedValue += nestedJoin(element, delimiter) + d
//         } else {
//             joinedValue += element + d;
//         }
//     })
//     return joinedValue
// }

// nestedJoin(['a', ['b',[[[['c']]]], 'c'], 'd'], '###')


// Recursion can also be used in a similar manner to loop over objects and their key/value pairs
// let obj = {
//     a: 10,
//     b: {a: 10}
// }


// function sumAnObj(obj) {
//     let sum = 0
//     for (let key in obj){
//         let value = obj[key]
//         if (typeof value === 'object') {
//             sum += sumAnObj(value)
//         } else {
//             sum += value
//         }
//     }
//     return sum
// }

// console.log(sumAnObj({a: 11,b: {a: 10, b: {a: 30}}}))














