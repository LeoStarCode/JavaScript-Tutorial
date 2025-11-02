# JavaScript Learning Repository

This repository contains my JavaScript learning notes and code examples, organized by sections and lectures. The code is beginner-friendly and covers basics, variables, functions, loops, DOM manipulation, and more. Credit Mosh Hamedani in this video: https://www.youtube.com/watch?v=W6NZfCO5SIk

---

## Setup
1. Download "VS Code" from here: https://code.visualstudio.com/Download
2. Go to the "Extensions" tab and download "Live Server"
3. Download all the files from this repositry and open them in VS Code
4. Right click on "index.html" and choose "Open with Live Server"
5. You can now access the console by right clicking on an empty area, choosing "Inspect" and then enter the console tab.
6. You can access the guide in the "script.js" file..

---

## Table of Contents
1. [Introduction](#section-1-introduction)
2. [Values & Variables](#section-2-values--variables)
3. [Primitives & Types](#section-3-primitives--types)
4. [Reference Types](#section-4-reference-types)
5. [Functions](#section-5-functions)
6. [Built-In Functions](#section-6-built-in-functions)
7. [DOM Interaction](#section-7-dom-interaction)

---

## Section 1: Introduction
**Lecture 1 – First Trial**
- `console.log()` prints messages in the console.
- `alert()` shows popup messages (can be disabled).
- Basic math operations: `+`, `-`, `*`, `/`, `**`.
- Math shortcuts: `++`, `--`, `+=`, `-=`, `*=`, `/=`.
- Comments: `//` for single-line notes.
- Strings can use `" "`, `' '`, or backticks `` ` ` `` for template literals.
- Escape sequences: `\n`, `\\`, `\"`.
- Semi-colons `;` end statements (optional but recommended).

---

## Section 2: Values & Variables
**Lecture 2 – Variables**
- Declare variables using `let` or `var` (avoid `var` due to bugs).
- Variables can be assigned later.
- Rules: cannot start with numbers, no spaces/hyphens, case-sensitive.

**Lecture 3 – Constants**
- Use `const` for permanent variables that cannot change.
- Constants inside functions/loops are recreated each execution.

---

## Section 3: Primitives & Types
**Lecture 4 – Primitive Types**
- String, Number, Boolean literals.
- Undefined and Null represent missing values.
- ES6 Symbol: unique values, optionally global with `Symbol.for()`.

**Lecture 5 – Dynamic Typing**
- JavaScript is dynamically typed; variable types can change.
- Numbers are all the same type (unlike Java/C++).

---

## Section 4: Reference Types
**Lecture 6 – Objects**
- Objects store key-value pairs, like Python dictionaries.
- Access: dot notation `obj.key` or bracket notation `obj['key']`.

**Lecture 7 – Arrays**
- Arrays are ordered lists; indexes start at 0.
- Can store different types.
- Length property: `arr.length`.

---

## Section 5: Functions
**Lecture 8 – Functions**
- Declared using `function name(args) {}`.
- Arguments can be optional (default `undefined`).
- Functions can return values with `return`.

---

## Section 6: Built-In Functions
**Lecture 9 – Control Flow**
- Conditionals: `if`, `else if`, `else`.
- Comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`.
- Loops: `while`, `for`, `for...of`, `for...in`.
- `break` exits loops early.
- `setTimeout(function, delay, args)` schedules delayed execution.

---

## Section 7: DOM Interaction
**Lecture 10 – Getting Elements**
- `document.getElementById()` or `getElementsByClassName()` to access HTML elements.

**Lecture 11 – Changing Text**
- `element.textContent` to change the text of HTML elements dynamically.

**Lecture 12 – Detect Button Click**
- `element.addEventListener('click', function)` to trigger actions on clicks.
- Access input values with `input.value`.

**Lecture 13 – Creating Elements**
- `document.createElement()` to create new HTML elements.
- Append with `parent.appendChild()`.
- Modify properties: `className`, `style`, `textContent`, `src`, `width`, `height`.
- `setTimeout()` can remove elements after a delay.

---

## Notes
- This project is for learning purposes and demonstrates basic to intermediate JavaScript concepts.
- All code is commented for clarity and beginner understanding.
- Feel free to experiment and modify examples for practice.

---

## Author
**Leo Alon** – Beginner JavaScript enthusiast

## Credit
**Mosh Hamedani** - Developer on youtube - https://www.youtube.com/@programmingwithmosh

---

# Good Luck
