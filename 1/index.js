const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);





// What is Tidy Code?

// What does not Tidy Code look like?

// function  d   () {var a  = 1+1; console.log(a+6);} d();

// "This code works"

// What are all of your thoughts on this code?

// Hard to read

// Linting - Linting is the process of going through code and applying formatting rules
// Spaces are randomly there or not - Even spacing (lint rule)
// Poor variable names - Best Practice: Name things to describe what it is they do, or what it is they store.
// Nauseous and has headache - Whiskey
// Lines - Indentation
// No indentation - Indentation

// Indentation are the rules around two specific behaviors: When we make new lines in our code, and how far we indent those lines of code.
// In JS the rules for indentatation are very simple: Every time we open a '{' we add a new line, and we indent the next line. Every time we close a '}' we add a new line and remove an indentation, each closing bracket should be on its own line. Every time we finish an expression - we make a new line.
// Padding - Padding means that we add lines to seperate places of code that dont neccesarily interact.

// function addTwoToSix () {
//   var two = 1 + 1; 
//   console.log(two + 6); 
// }

// addTwoToSix();

// Indentation
// Tabs vs Spaces

// You probably didnt know this, but tabs are not made up of spaces. Tabs are an entirely different thing.

// console.log('\ta');

// Okay then, what is a tab?

// TABS
// A tab is a 'relative unit'. What I mean is that, each different piece of software (e.g. microsoft word, vs slack) interprets tabs their own way. Further, each computer interprets tabs differently (e.g. mac vs windows). The important part of a relative unit is this: We can define how we want tabs to look on each of our computers. I might like tabs to look like 3 spaces, while Rich might like 6 spaces, and Kathleen might like 10 spaces. But, since for each of us its just a \t -> on each of our computers it looks the way we like.

// SPACES
// Theyre just a spcae. A space is generally the median width of a font type in empty space.

// So why are we talking about this?
// The laws of indentation specify that we add indentation after a bracket, and remove it after we close a bracket. The question at some point in computer science history became: "how much do i indent it?"

// There is no answer to that.

// Programmers have never been able to agree on how indentation works. There are a few accepted policies surrounding indentation

// NONOS: 
// 1. Mixed spaces and tabs
var mixedSpacesAndTabs = ' \t ';
// 2. Anything over 6 'spaces' wide, is pretty darn aggressive.
function someFunction () {
           var a  = 'b';
           function anotherFunction () {
                     var c = 'd';  
           }
}
// A bit aggressive eh? ^^^

// Generally accepted policies:
// 1. Use even amounts (2, 4, 6)
// 2. And it should always be one tab, not two.
// 3. Most people prefer the smaller units, so 2 seems to be a standard for now.

// Spaces: Your code looks the same everywhere, but your friend cant have your code look the way he likes.
// Tabs: The code looks different everywhere, and all your friends see the code the way they like.

// In editors, we configure the Tab key to output spaces. So instead of tab actually outputting a tab, it instead outputs say 2 spaces.

// I cant tell you hands down how to write beautiful code, it is a learned thing through practice. The important part of this lecture is that you understand HOW IMPORTANT YOUR CODE LOOKING GOOD IS.

// I beg of you, over the next 4 weeks, to develop opinions on what makes code readable, and good, and also helps prevent us from writing bad code.

// Our opinions dont have to be the same, but the rule of thumb for your opinions is that every opinion you found you should be able to explain.

// GOLDEN RULE: Tabs or spaces, semicolons or not, switch statement indents, arrow functions or not, I will not judge you as long as you are CONSISTENT in using your rules. Whatever rules you choose - YOU STICK TO. And your entire codebase should follow those same rules.



















