const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Types

// What does type mean?
// Class Answers:
// string, object, or number
// there are more
// What a computer can do with a value, and what it thinks of a value

// c(1 + 1);
// c('1' + '1');
// c(1 + '1' - '1');

// Types: A type represents any value in a computer system and its inherent behaviors.
// Numbers: Can be added, subtraced, multiplied, divided, etc.
// Strings: We expect are made up of pieces (characters), and we can take strings and put them together.

// All a type really means is how we can use these values.

// Numbers

/*
Numbers are numbers.
We want to be able to perform as many mathematical operations as possible on numbers.
What are numbers in JS?
"Javascript when given the choice between performance, or convenience, will always pick convenience."

1 + 1.0976
2.7 / 5
1e14 / 0

These are all allowed in JS.

They are not allowed in most traditional languages.

Java
(1 + 1.0976)
int intOne = 1;
double doubleOne = 1.0976;

double result = doubleOne + intOne;

var, let, const is gone.
In other languages where performance is the primary goal, what you have to do is describe in specificity what KIND of number you are dealing with.

32 bit

0 = 0
1 = 1
2 = 00
3 = 01
4 = 10
5 = 11
6 = 000

A lot of languages optimize memory usage around numbers, asking us to specify how much memory we will require for a number.
Javascript doesnt care at all.
In JS we write everything with var, let, or const. We never declare how much memory were going to need.
*/

// Because, were trading away the ability to work with very large numbers.
// c(Number.MAX_SAFE_INTEGER);
// Thats exactly what brandon eich said when he made javascript: "who needs more then 9 quadrillion"
// Most banks.
// In science, we often compute things that are much larger.
// Any numbers decimals, not decimals, between negative and positive 9007199254740991 - are fair game in JS.
// We know all the operators but we can do any mathematical operation in JS.

// Strings
// Strings represent a sequence of characters.
// What is a character? It is anything that your computer understands and can display based on that understanding.
// Characters are really just a collection of codes.

const someString = 'eliot is a 🤠';
// const index = 11;

// c(someString[index], someString.charCodeAt(index));

// What strings really look like is:

// c(someString.split('').reduce((acc, nextChar) => acc + nextChar.charCodeAt(0).toString(), ''));

// Booleans
// True or false.

// Weve covered strings, booleans, and numbers.
// Is 99% of computing.

// JS has six primitive types now.
// One complex type.

// Null
// The absence of value.

// Undefined
// To have forgotten a value.

// Null vs Undefined
// I like to seperate the two by one word: intent
// Null is something we use with intentions. We may plan to later give a value to a variable that is null at first, or we may in fact just want a placeholder value.
// Undefined is something that occurs from errors, or mistakes. It represents something that was declared but forgotten.

// If you see undefined in a log, you have a bug.
// If you see null in a log, things are humming along fine.

// It is entirely up to you as a programmer to make sure to use null when appropriate and to never explicitly make something undefined.

// I think of undefined as a value we made for the computer to use to represent errors, and null as a value for humans to represent future value.

// Symbol
// Symbols are a type that solves the problem of wanting to have two seemingly identical values, that can never be identical, and further to give us a value which is truly unique.

const varOne = Symbol('a');
const varTwo = Symbol('a');

// c(varOne === varOne);

// Objects talk about objects. -> the complex type.
// They have nothing to do with coercion.

// Coercion: "What happens when i want to make one type another type?"

// Languages that are 'strictly typed' and languages that are 'loosely typed'.
// In a strictly typed language, no variable can exist without a typing describing what kind of type that variable is.

// Java Strict Typing an Int
// int intOne = 5;

// In a strict language, any variable that is lacking a type is seen as an exception - which means - the code will crash (purposefully).
// Secondly, it means there are specific rules around how one type becomes another type.

// Where we have intOne = 5. Now I want to print to a user "You have 5 cats???"

// If I want to take an int and make it a string, I have to do something called 'casting'. Casting stands for type casting - which is where we take one type and specify it becoming another type IN ANOTHER VARIABLE.

// string stringOne = toString(intOne);

// Who would ever want to do all this?

// Strict typing has a myriad of benefits, including most importantly a promise from our code that we will never have a value of the wrong type.
// Strict typing allows better static analysis of code. Editors work better on it.

// Javascript dont care. Dynamic language. Javascript lets us store anything anywhere of any type at any time. It doesnt care about our use of types, nor does it care about if we introduce an entirely new type. Casting doesnt really exist in javascript - we refer to explicit coercion as casting, I will show that in a minute here.

// This is an ongoing debate in the JS community right now. There are ways to get JS to be more strongly typed notably: TypeScript and Flow (Microsoft and Facebook), but you should not think about that for a long time. Master a language then worry about its offshoots.


// c(1 + '1' - '1');
// JavaScript is told to add a number and a string together, so it says, oh you must want a string.
// 1 + '1' === '11'
// Then it says oh '11' - '1' - I have no idea what minus means when it comes to strings, so I guess you want me to COERCE those values into numbers, and then subtract them.
// 10

// "Performance or convenience, JavaScript picks convenience."
// Would we rather our codebase break?

// Yes, please break my code so that I know I am doing terrible things.
// No, Ill just console log everything until I figure it out.

// You dont want to see red text.

// Coercion

// Coercion has a 57 page specification about the many scenarios surrounding how it should behave.
// No please dont do that.

// What were going to do is were going to learn to use casting always (not real casting js casting) when it comes to coercing values between types - except one scenario (thats what well end the class one)

// Any time you need coercion ask yourself the following very easy question: What is the type of my expected output?
// Number - and we are really trying to add numbers together.
// String -> Number casting is done via two methods: parseInt, and parseFloat
// I was very specific with JS that I wanted only numbers to be dealt with.
// This is how you should think about writing coercion.
// c(1 + parseInt('1') - parseInt('1'));

// Number -> String casting is done via toString

// c((1).toString() + '1')

// We can do this for any types... But there is one type in particular that coercion is extremely useful for...

// Booleans

// Test Expressions
// Test Expressions also follow JavaScrips favorite rule: 'Convenience over performance'.
// They do not want to break.
// No matter what you put in a test expression, it will run.
// That means that each test expression HAS TO evaluate whatever we put in it to be TRUE OR FALSE.

// if (true) {
//   c('I ran!');
// }

// How is it determing what is true and what is false?
// The implicit "Truthiness" of a value.
// Every single value in JS is either truthy or falsy. That means when coerced into a boolean, is it true or false?

// We could learn about the six falsy values in JS and assume every other value is truthy.
// the six values that coerce into false:
false
null
undefined
NaN
''
0

// Every other value evaulates to true...

// let counter = 0;

// maybe counter incremented

// if (counter) {
//   c('I ran!');
// }

// Using truthy/falsy this way is completely unneccessary. It is just what you might run into in other peoples code, so I want you to know it.
// It is a shorthand for longer expressions, not something that we use to actually change how code works.
// Its awesome if you want to start writing code this way, but dont feel forced to.

// === and ==
// Dont ever use double equals.
// "Please make these equal"

// c(undefined == 'undefined')

// Strict Equality e.g. === means "We are the same value and the same type"































































































