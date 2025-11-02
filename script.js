// JavaScript Learning
// Here is my JavaScript introduction based on all the lectures I learnt to start using JavaScript

// To start:
// 1. download Live Server extension, right click on the index.html and click "Open with Live Server";
// 2. right click on a blank area, click on "Inspect" and choose the console tab, there you can find all the console outputs.


// Section 1: Introduction
// First Lecture: First Trial

// "console.log()" is simply printing an input in the console
console.log("Hello World");

// "alert()" is giving a message popup on the site
// alert("Hello World"); // I commented this line so that it wouldn't popup every time the page refreshes

// we can do math using math like this
let result = 1 + 1;
// for more complex math, create it with functions or use the built-ins

// some math shortcuts are ++ which adds 1 to a number, -- subtracts, += [number] which adds a chosen number to the number, -=, *=, /= do the same but with their own sign, and ** is power.


// Here are some more basics:
// Comments are notes in the code that you can see but will be skipped when the code is running
// to write a comment we use "//", you can also write those after a line of code like this:
console.log("Hello World"); // This comment is after the line of code

// The escape character in JavaScript is "\" (backslash), we use it in strings (texts) to disable an interactive character (', " etc.) like this:
console.log("\"Hello World\"");

// To disable a backslash we can just add another one
console.log("\\");

// The backslash is also used to use some text change like "\n" which will go a line down
console.log("Hello \nWorld");

// Of course, if we don't want it to work, we can add a backslash
console.log("Hello \\nWorld");

// The Double Quotes("") and the Single Quotes('') are the same and are your choice. "" = ''
// But the Backticks are different, text in `` will be taken as literal (but you can still use the backslash), so you can do things like multiple lines.
console.log(`Hello
World`);

// you can also use them to enter outside text with ${}
let text = "World";
console.log(`Hello ${text}`);

// you can add strings using "+"
console.log("Hello " + text);

// Every most statements in JavaScript end with a semi-colon (;), for example:
console.log("Hello World"); // Here is a semi-colon at the end of the statement


// Section 2: Values/Types of Variables
// Second Lecture: Variables

// Variables are declared with the "let" keyword like this:
let myName = 'Leo';
console.log(myName);

// before "let" there was "var" which you can still use but var is buggy so you should use "let"

// We can also just declare a variable and leave it undefined
let friendName;
// And then later on when we need we can enter a value
friendName = 'John';

// Rules for Variables:
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Leo';
let lastName = 'Alon';


// Third Lecture: Constants

// Constants are declared with the "const" keyword like this
const interestRate = 0.3;
// We cannot change a constant
// interestRate = 1; // This will not work because you cannot change a constant; if you would write "let" instead of "const" it would work
console.log(interestRate);

// So constants are permanent variables that cannot change.
// but if you put them in a function, while loop, for loop, etc., then they will recreate themselves every time.


// Section 3: Basic Types (Primitives)
// Fourth Lecture: Primitives Types

// Normal Primitives
const string = 'String'; // String Literal
const number = 1; // Number Literal
const boolean = true; // Boolean Literal

// Primitives Without Any Value
// Had been declared/created but no value got assigned, or something that hasn't been created.
let undefined_; // Undefined (I used let because with const you must assign a value)
const undefined__ = undefined; // Undefined (undefined is a type but also a value)
// Intentional absence of value
const null_ = null; // Null

// es6 Primitive: Symbol
// Creates a unique value.
const x = Symbol('x'); // Symbol
console.log(x);

// Every Symbol is unique, for example:
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id == id2);

// if we want 2 symbols to be the same, we need to add "for":
const id3 = Symbol.for('id');
const id4 = Symbol.for('id');
console.log(id3 == id4);


// Fifth Lecture: Dynamic Typing

// There are 3 types of languages: Static (statically-typed), Dynamic (dynamically-typed) and there is in between.
// In static languages like C++, the type of the object is set and cannot be changed.
// In dynamic languages like JavaScript, the type of a variable can change at runtime.
// In between languages like Python, you need (but only can in some languages because it's automatic) to declare the data-type and you can change the data-type anytime you want.

// All numbers are the same, unlike other languages like Java and C++ where there is integer, floating point, double, etc.


// Section 4: Reference Types
// Sixth Lecture: Objects

// This is the properties of a person, so let's get them into an Object named "person"
// let name = 'Leo';
// let age = 13;

// Objects are like python dictionaries
// each item in the Object is built from a keyword and a value, it's written like this: [keyword]: [value]
const person = {
    name: 'Leo',
    age: 13
};

console.log(person);

// To access a property there are two ways
// Dot Notation
person.name = 'John';
console.log(person.age);

// Bracket Notation
person['age'] = 5;
console.log(person['name']);

console.log(person);


// Seventh Lecture: Arrays

// Array = Series/List of Items
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

// To access an item in an Array we need to choose the item by its index (the index starts from 0) using bracket notation
console.log(selectedColors[0]);

// To add/change an item you simply need to write the index of the place you want to set/change and write its value
selectedColors[2] = 'green';
console.log(selectedColors);

// you can add values in positions with bigger index than the last index
selectedColors[4] = 'yellow';
console.log(selectedColors);

// In JavaScript we can have an Array with different types
selectedColors[3] = 1;
console.log(selectedColors);

// Arrays have properties that are defined automatically
// one of them is the "length" property
console.log(selectedColors.length);

// The length property is not only an array property
console.log('Hello World'.length);


// Eighth Lecture: Functions

// This is the way to create a function
// function [function name]([arguments]) {}
function greet() {
    // Function Body: everything here will be executed when the function is called
    console.log('Hello World');
}
// Calling the function
greet();

// Function with an argument (argument is an input that the function uses), to add an argument you just need to put it in the ()
function greetPerson(personName) {
    console.log('Hello ' + personName);
}
// to fill the argument we just put it in the ()
greetPerson('John');

// Function with multiple arguments
// we just need to add a , between the arguments
function greetPersonFullname(personName, lastName) {
    console.log('Hello ' + personName + ' ' + lastName);
}
greetPersonFullname('Leo', 'Alon');

// If you leave an empty argument in the function it'll default to undefined. For example:
greetPersonFullname('Mary');

// You can also make a function return a value
function square(n) {
    return n ** 2;
}
console.log(square(1));


// Ninth Lecture: Built-In Functions

// In JavaScript (like almost every other language) there are some built-in functions that the creators pre-created for us.
// For example: in console.log one of the built-in functions is the .log(), it takes parameters

// So here are some more built-in functions that you need to know:
// if and else all take a statement and make it a boolean or take a boolean, for example 1 == 1 is true. also when you check something you do == equal to, != not equal to, > bigger than, < smaller than, >= bigger or equal to and <= smaller or equal to.
const isStudent = true;
if (isStudent) { // the if checks the condition and if it's true it executes the body
    console.log("you are a student");
} else { // if the if condition does not apply the else will work
    console.log("you are not a student");
}

// There is also the else if which if condition a doesn't apply checks for its own condition
let age = 13;
if (age < 12) {
    console.log("you are a child");
} else if (age >= 18) { // if the first condition doesn't apply, it checks for this condition
    console.log("you are an adult");
} else {
    console.log("you are a teen");
}
// note: in some cases two conditions will apply so pay attention to the order, for example here, if age was 19 and I replaced the 3rd and 2nd it would write that I'm a teen.

// While loops check for a condition and loops while it's true
while (age < 18) {
    age++;
    console.log(`you are now ${age} years old`);
}

// You can also break while loops with "break"
while (true) {
    age--;
    if (age <= 0) {
        console.log("you got rebirthed");
        break;
    }
}

// For Loops loop through something
// In arrays - of
for (const item of selectedColors) { // will loop through selected color and assign the value to item
    console.log(item);
}

// In objects - in
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// you can also do for loops similar to while loops.
// first part: initialExpression (let i = 0;)
// second part: condition (i < 5;)
// third part: finalExpression
for (let i = 0; i < 5; i++) { // while i is smaller than 5, add 1 to it.
    console.log("Iteration: ", i);
}

// setTimeout waits to do something while everything else runs
// The syntax is setTimeout(function, delay, arg1, arg2, ...)
// you can enter a function
function print(text) {
    console.log(text);
}
setTimeout(print, 1000, "Hello after 1 second"); // will print: "Hello after 1 second" after 1 second

// you can also create a function inside the setTimeout
setTimeout((text) => {
    console.log(text);
}, 2000, "Hello after 2 seconds"); // will print: "Hello after 2 seconds" after 2 seconds


// Section 5: Interacting with the Website
// Tenth Lecture: Getting Hold of the Elements

// Let's get hold of our 4 Objects (our h2, button, input and submit button).
// To do that we'll access the document and use the getElementById() function, it'll basically get hold of the item with the desired id.
const nameText = document.getElementById('name'); // get the h2 title
const clickMeButton = document.getElementById('button'); // get the "Click Me" button
const nameInput = document.getElementById('new-name'); // get the input element
const submitButton = document.getElementById('submit-button'); // get the submit button

// Now we can interact with the elements, let's create the variables.
let name_ = 'Leo';
let nameCurrent = false;


// Eleventh Lecture: Interacting with Text

// Now that we have hold of the elements we can control them.
// In this lecture we will change text using the textContent property.
function switchNameLength(event) {
    if (nameCurrent) {
        nameText.textContent = `My name length is: ${name_.length}`; // this will change the text to the length of the name
        nameCurrent = false;
    } else {
        nameText.textContent = `My name is: ${name_}`; // this will change the text to the name
        nameCurrent = true;
    }
}
switchNameLength();


// Twelfth Lecture: Detect Button Click

// To do this we'll use the addEventListener() function
clickMeButton.addEventListener('click', switchNameLength); // this will trigger the switchNameLength() function every time the button is pressed

// We can also do this by creating a function instead of calling one
// This also answers how to get the value of the input or change it with the value property.
submitButton.addEventListener('click', function() {
    if (nameInput.value.trim() != "") { // if the input is not empty, set the name to value
        name_ = nameInput.value;
        nameText.textContent = `My Name is: ${name_}`;
        nameCurrent = true;
        createSuccessDiv(true);
    } else {
        createSuccessDiv(false);
    }
    // Let's also clear the input every time the function is called using the value property
    nameInput.value = ""; // this will set the value of the input to nothing
});


// Thirteenth Lecture: Creating New Elements

// Let's create a div using the createElement() function
function createSuccessDiv(check) {
    const parentDiv = document.getElementsByClassName("parent-container")[0]; // get the parent div using the getElementsByClassName()
    const div = document.createElement("div"); // create container
    const text = document.createElement("h2"); // create title
    const image = document.createElement("img"); // create image

    div.className = "container"; // make the class centered
    div.style = "margin-left: 50px;"; // add some spacing
    if (check) { // write successful or not depending on if the name change was successful or not
        text.textContent = "Successfully Changed";
    } else {
        text.textContent = "You Cannot Choose a Blank Name";
    }
    if (check) { // set image to be 250 x 250, and be check mark if it could make it the name, else x mark
        image.src = "check-mark.jpg";
        image.alt = "Check mark";
    } else {
        image.src = "x-mark.jpg";
        image.alt = "X mark";
    }
    image.width = 250;
    image.height = 250;

    div.appendChild(text);
    div.appendChild(image);

    parentDiv.appendChild(div); // put the new div in the overall container

    setTimeout(() => { // remove all the new stuff after 1 second
        div.remove();
    }, 1000);
}
