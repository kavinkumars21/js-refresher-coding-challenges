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

---

## Hard Challenges (Time to Level Up!)

These challenges will really push your understanding of more advanced array and object tricks, cool new JavaScript features (ES6+), handling stuff that takes time (asynchronous code), and tackling more complex problems.

### 1. Flattening a Nested Array

* **What it's about:** Functions calling themselves (recursion), arrays (`isArray`, `concat`, `reduce`), and looping through things.

* **Your Mission:** Write a function called `flattenArray(arr)`. It takes an array that might have other arrays inside it (like a Russian doll!) and should give you back a *new* array where everything is on just one level, no more nested arrays.

* **Example Input:** `flattenArray([1, [2, 3], [4, [5, 6]]])`

* **Example Output:** `[1, 2, 3, 4, 5, 6]`

* **Things to think about:** What if the array is empty? What if it has no nested arrays at all? What if it's super deeply nested?

### 2. Building a Debounce Function

* **What it's about:** Functions that return other functions (higher-order functions), closures (functions remembering their surroundings), `setTimeout`, `clearTimeout`, and that tricky `this` keyword.

* **Your Mission:** Write a function called `debounce(func, delay)`. It takes a function `func` and a `delay` (in milliseconds). It should give you back a *new* function. When you call this new function, it will only run `func` if you stop calling it for at least `delay` milliseconds. This is super useful for making things like search bars or resizing windows feel smoother!

* **Example Input:**
    ```javascript
    const logClick = () => console.log("Button Clicked!");
    const debouncedClick = debounce(logClick, 500);
    // Call debouncedClick a few times really fast. Only the *last* one should actually log after 500ms.
    debouncedClick();
    debouncedClick();
    setTimeout(debouncedClick, 300); // This one will be the last to actually fire.
    ```

* **Example Output:** (After about 800ms total) `"Button Clicked!"` (just once!)

* **Things to think about:** How do you pass arguments to the debounced function? How do you make sure `this` (if `func` is part of an object) stays correct? (Hint: `apply` or `call` might help!)

### 3. Deeply Merging Objects

* **What it's about:** Objects, recursion, `Object.keys()`, `hasOwnProperty`, and making sure you don't change the original objects (immutability).

* **Your Mission:** Write a function called `deepMerge(obj1, obj2)`. It takes two objects and gives you back a *new* object that's a "deep merge" of the two. If a property exists in both and its value is another object, you should merge *those* objects too. Otherwise, if there's a conflict, `obj2`'s value wins.

* **Example Input:**
    ```javascript
    const objA = { a: 1, b: { c: 2, d: { e: 3 } }, f: [1, 2] };
    const objB = { b: { c: 4, g: 5 }, h: 6, f: [3, 4] };
    deepMerge(objA, objB);
    ```

* **Example Output:**
    ```javascript
    { a: 1, b: { c: 4, d: { e: 3 }, g: 5 }, f: [3, 4], h: 6 }
    ```

* **Things to think about:** How do you handle arrays? Should they be merged or just replaced? What about `null` or `undefined` values? (Super hard bonus: what about circular references where objects refer to each other?)

### 4. Building Your Own `Promise.all`

* **What it's about:** Promises (for handling things that take time), `async/await` (or `.then()/.catch()`), looping through arrays, and dealing with errors.

* **Your Mission:** Create your own version of JavaScript's `Promise.all`, and call it `myPromiseAll(promises)`. It should take a list of Promises. It'll give you back a single Promise that, when everything's done, resolves with a list of all the results, in the exact same order as your input promises. But if *any* of the input promises fail, your `myPromiseAll` should immediately fail with the reason from the first one that messed up.

* **Example Input:**
    ```javascript
    const p1 = Promise.resolve(3);
    const p2 = new Promise(resolve => setTimeout(() => resolve(42), 100));
    const p3 = Promise.reject('Error!');
    myPromiseAll([p1, p2]) // Should give you [3, 42]
    myPromiseAll([p1, p3, p2]) // Should fail with 'Error!'
    ```

* **Example Output:** (Resolved value) `[3, 42]`, (Rejected value) `'Error!'`

* **Things to think about:** What if the input list of promises is empty? What if some of the items in the list aren't even promises?

### 5. Making a Currying Function

* **What it's about:** Functions that return other functions (higher-order functions), closures, and how functions get their arguments.

* **Your Mission:** Write a function called `curry(func)`. It takes a function `func` and gives you back a "curried" version of it. A curried function takes its arguments one at a time, returning a new function each time until it has all its arguments, and *then* it runs the original function.

* **Example Input:**
    ```javascript
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    curriedAdd(1)(2)(3); // Should give you 6
    curriedAdd(1, 2)(3); // Should also give you 6
    curriedAdd(1)(2, 3); // And this too!
    ```

* **Example Output:** `6`

* **Things to think about:** What if the original function doesn't take any arguments? What if it takes a flexible number of arguments (like `...rest`)?

### 6. Simple Memoization (Caching)

* **What it's about:** Closures, using objects to store stuff (for caching), and making your code faster!

* **Your Mission:** Write a function called `memoize(func)`. It takes a function `func` and gives you back a "memoized" version of it. This memoized function should remember the results of `func` calls based on the arguments it received. If you call it again with the *exact same arguments*, it should just give you the saved result instead of doing all the work again.

* **Example Input:**
    ```javascript
    const expensiveCalculation = (num) => {
      console.log('Calculating...'); // This should only run when it's actually calculating!
      return num * num;
    };
    const memoizedCalc = memoize(expensiveCalculation);
    memoizedCalc(5); // You'll see "Calculating...", then get 25
    memoizedCalc(5); // No "Calculating..." this time, just 25 (from memory!)
    memoizedCalc(10); // You'll see "Calculating...", then get 100
    ```

* **Example Output:** (What you'll see in the console)
    ```
    Calculating...
    Calculating...
    ```

* **Things to think about:** How do you handle functions with multiple arguments? (A simple way is to turn the arguments into a string to use as a key for your cache). What if the arguments are objects or arrays themselves? (That gets tricky with how JavaScript compares them!)

### 7. Validating a Simple JSON Structure

* **What it's about:** Objects, recursion, checking types (`typeof`, `Array.isArray`), and controlling how your code runs.

* **Your Mission:** Write a function called `validate(data, schema)`. It should check if a `data` object matches a simple `schema` object. The schema will tell you what `type` each property should be (`"string"`, `"number"`, `"boolean"`, `"object"`, `"array"`). For objects, the schema can even describe what's inside them.

* **Example Input:**
    ```javascript
    const data = { name: "Alice", age: 30, address: { city: "NY" } };
    const schema = {
      name: { type: "string" },
      age: { type: "number" },
      address: {
        type: "object",
        properties: {
          city: { type: "string" }
        }
      }
    };
    validate(data, schema); // Should give you true
    validate({ name: 123 }, schema); // Should give you false
    ```

* **Example Output:** `true` or `false`

* **Things to think about:** What if some required properties are missing? What if there are extra properties not in the schema (should you ignore them or flag them)? What if the types are wrong? How do you handle validating arrays (like, what type should the items *inside* the array be)?

### 8. A Simple Event Emitter

* **What it's about:** Objects, closures, arrays, functions, and understanding that `this` keyword.

* **Your Mission:** Create a simple `EventEmitter` (you can make it a class or just a function that makes objects). It should let you "listen" for events and "trigger" them. So, an `on(eventName, listener)` method to add a function to run, and an `emit(eventName, ...args)` method to make all those functions run for a specific event.

* **Example Input:**
    ```javascript
    const emitter = new EventEmitter();
    const handler1 = (data) => console.log('Handler 1:', data);
    const handler2 = (data) => console.log('Handler 2:', data);

    emitter.on('dataLoaded', handler1);
    emitter.on('dataLoaded', handler2);
    emitter.on('error', (err) => console.error('Error:', err));

    emitter.emit('dataLoaded', { message: 'Success!' });
    emitter.emit('error', 'Something went wrong!');
    ```

* **Example Output:**
    ```
    Handler 1: { message: 'Success!' }
    Handler 2: { message: 'Success!' }
    Error: Something went wrong!
    ```

* **Things to think about:** What if you `emit` an event that nobody's listening for? (Bonus: how would you add a way to *stop* listening for an event, like an `off` method?)

### 9. Pagination Logic

* **What it's about:** Array methods (`slice`), numbers, math (`Math.ceil`), and functions.

* **Your Mission:** Write a function called `getPaginatedData(data, pageSize, pageNumber)`. It takes a list of `data`, how many `pageSize` items you want per page, and which `pageNumber` you're on (starting from 1). It should give you back a *new* array with just the items for that specific page. Also, tell us the total number of pages!

* **Example Input:**
    ```javascript
    const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
    getPaginatedData(items, 10, 1); // First page
    getPaginatedData(items, 10, 3); // Third page (should be the last 5 items)
    ```

* **Example Output:**
    ```javascript
    // For getPaginatedData(items, 10, 1)
    {
      pageItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
      totalPages: 3
    }
    // For getPaginatedData(items, 10, 3)
    {
      pageItems: ["Item 21", "Item 22", "Item 23", "Item 24", "Item 25"],
      totalPages: 3
    }
    ```

* **Things to think about:** What if the `data` array is empty? What if `pageSize` is zero or negative? What if `pageNumber` is way too high (should probably give an empty list of items)?

### 10. Fetching Data with Retries (Asynchronous)

* **What it's about:** `async/await` (for smooth async code), Promises, `try/catch` (for errors), `setTimeout`, and maybe even functions calling themselves (recursion) or just a good old loop.

* **Your Mission:** Write an `async` function called `fetchWithRetry(url, retries = 3, delay = 1000)`. It should try to grab data from a `url`. If it fails (like, no internet or a bad response from the server), it should try again up to `retries` times, waiting for a `delay` between each try. If it still can't get the data after all the tries, it should throw an error.

* **Example Input:**
    ```javascript
    // Imagine we have a fake fetch that fails twice, then works!
    let attempt = 0;
    global.fetch = jest.fn((url) => {
      attempt++;
      if (attempt < 3) {
        return Promise.reject(new Error('Simulated network error'));
      }
      return Promise.resolve({
        ok: true, // Means a successful HTTP status (like 200)
        json: () => Promise.resolve({ data: 'Success after retries' })
      });
    });

    fetchWithRetry('[https://api.example.com/data](https://api.example.com/data)', 3, 100);
    ```

* **Example Output:** (After all the retries) `{ data: 'Success after retries' }`

* **Things to think about:** What if `retries` is 0 or negative? What if `delay` is 0? What kinds of errors should make it retry, and which ones should just make it give up right away?
