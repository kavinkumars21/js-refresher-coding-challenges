# JavaScript Coding Challenges

Hey there! This document is packed with a bunch of coding challenges designed to really help you get a solid grip on JavaScript. We've got everything from the basics to some trickier stuff. For each challenge, you'll find a clear description, some examples of what goes in and what comes out, and a heads-up about any tricky situations you might run into.

## Easy Challenges (Let's Start with the Basics!)

These challenges are perfect for checking if you've got a good handle on things like variables, different types of data, basic math, how your code flows, and simple functions.

### 1. Greeting Function

* **What it's about:** Functions, text (strings), giving info to functions (parameters), and getting stuff back.

* **Your Mission:** Write a function called `greet(name)`. It should take someone's `name` (as text) and give you back a friendly greeting message.

* **Example Input:** `greet("Alice")`

* **Example Output:** `"Hello, Alice!"`

* **Things to think about:** What if the `name` is empty, or `null`, or `undefined`? (For these easy ones, let's just assume you'll get proper text, but it's good to keep in mind for later!)

### 2. Even or Odd Check

* **What it's about:** `if/else` statements, numbers, and that handy little `%` (modulo) operator.

* **Your Mission:** Write a function called `isEven(number)`. It should tell you `true` if the `number` is even, and `false` if it's odd.

* **Example Input:** `isEven(4)`, `isEven(7)`

* **Example Output:** `true`, `false`

* **Things to think about:** What about negative numbers or zero? (Yep, 0 counts as even!)

### 3. Adding Up Array Numbers

* **What it's about:** `for` loops, lists of stuff (arrays), numbers, and keeping a running total.

* **Your Mission:** Write a function called `sumArray(numbers)`. It takes an array of numbers and gives you back their total sum.

* **Example Input:** `sumArray([1, 2, 3, 4, 5])`

* **Example Output:** `15`

* **Things to think about:** What if the array is empty? (It should probably give you 0.)

### 4. Grabbing a Property from an Object

* **What it's about:** Objects (those key-value pairs), and how to get info out of them (using `.` or `[]`).

* **Your Mission:** Write a function called `getProperty(obj, key)`. It takes an object `obj` and some text `key` (which is a property name) and gives you back the value of that property.

* **Example Input:** `getProperty({ name: "Bob", age: 30 }, "name")`

* **Example Output:** `"Bob"`

* **Things to think about:** What if the `key` isn't actually in the `obj`? (It should give you `undefined`.)

### 5. Celsius to Fahrenheit Converter

* **What it's about:** Functions, numbers, and basic math.

* **Your Mission:** Write a function called `celsiusToFahrenheit(celsius)` that turns a Celsius temperature into Fahrenheit. The formula is: $F = C \times 9/5 + 32$.

* **Example Input:** `celsiusToFahrenheit(0)`, `celsiusToFahrenheit(25)`

* **Example Output:** `32`, `77`

* **Things to think about:** No super tricky stuff here, but in real apps, you might worry about super precise decimal numbers.

### 6. Finding the Bigger Number

* **What it's about:** `if/else` or that neat little ternary operator, and comparing numbers.

* **Your Mission:** Write a function called `findLarger(num1, num2)`. It takes two numbers and just gives you back the bigger one. If they're the same, either one is fine!

* **Example Input:** `findLarger(10, 5)`, `findLarger(7, 7)`

* **Example Output:** `10`, `7`

* **Things to think about:** Nope, nothing too wild here.

### 7. Reversing Text

* **What it's about:** `for` loops, strings, and putting text together (or turning it into a list of characters).

* **Your Mission:** Write a function called `reverseString(str)`. It takes a piece of text and gives you back a brand new piece of text with all the characters in reverse order.

* **Example Input:** `reverseString("hello")`

* **Example Output:** `"olleh"`

* **Things to think about:** What if it's an empty string? Or just one character?

### 8. Counting Vowels

* **What it's about:** `for` loops, strings, `if` statements, and some helpful string tricks like `toLowerCase` and `includes`.

* **Your Mission:** Write a function called `countVowels(str)`. It takes a piece of text and tells you how many vowels (a, e, i, o, u) are in it. Don't worry about uppercase or lowercase!

* **Example Input:** `countVowels("Programming")`

* **Example Output:** `3`

* **Things to think about:** Empty string? A string with no vowels at all? What if it's all capital letters?

### 9. Simple Calculator

* **What it's about:** Functions, `switch` statements (or `if/else`), and basic math operations.

* **Your Mission:** Write a function called `calculator(num1, num2, operator)`. It takes two numbers and a text symbol for an operation (`"+", "-", "*", "/"`). It should do the math and give you the result. Oh, and make sure it handles dividing by zero!

* **Example Input:** `calculator(10, 5, "+")`, `calculator(8, 2, "/")`

* **Example Output:** `15`, `4`

* **Things to think about:** If you try to divide by zero, return something like "Cannot divide by zero". If the `operator` isn't one of the valid ones, maybe "Invalid operator".

### 10. First and Last Array Elements

* **What it's about:** Arrays (lists), and how to get specific items using their position (indexing).

* **Your Mission:** Write a function called `getFirstAndLast(arr)`. It takes an array and should give you back a *new* array that only has its very first and very last elements.

* **Example Input:** `getFirstAndLast([10, 20, 30, 40])`

* **Example Output:** `[10, 40]`

* **Things to think about:** What if the array only has one item? (It should probably return `[item, item]`.) What if it's totally empty? (Maybe `[]` or an error message.)
