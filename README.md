# JavaScript Coding Challenges

This document delineates a structured compendium of programming exercises, meticulously formulated to fortify proficiency in JavaScript, encompassing foundational principles through advanced paradigms. Each challenge is comprehensively articulated, furnishing a problem statement, illustrative input and output exemplars, and pertinent considerations regarding anomalous scenarios.

## Easy Challenges (Focus on Foundational Concepts)

These challenges are meticulously engineered to assess comprehension of variable declaration, data typing, fundamental operators, control flow mechanisms, and elementary functional constructs.

### 1\. Greeting Function

  * **Concept(s) Covered:** Functions, String Manipulation, Parameterization, Value Return.

  * **Problem Description:** A function, designated `greet(name)`, is to be formulated. This function shall accept a string literal, `name`, as its sole argument, and shall subsequently yield a salutation message.

  * **Input Example:** `greet("Alice")`

  * **Output Example:** `"Hello, Alice!"`

  * **Edge Cases to Consider:** The implications of an empty string or the `null`/`undefined` states for `name` are to be noted. (For the purpose of this elementary exercise, the presumption of valid string input is maintained; however, future robustness necessitates broader consideration.)

### 2\. Even or Odd Determination

  * **Concept(s) Covered:** Conditional Branching (`if/else` statements), Numerical Data Types, Modulo Arithmetic (`%`).

  * **Problem Description:** A function, designated `isEven(number)`, is to be devised. This function shall return a Boolean value of `true` if the `number` under evaluation is an even integer, and `false` otherwise.

  * **Input Example:** `isEven(4)`, `isEven(7)`

  * **Output Example:** `true`, `false`

  * **Edge Cases to Consider:** The classification of negative integers and zero (0 is conventionally regarded as an even number) warrants attention.

### 3\. Aggregation of Array Elements

  * **Concept(s) Covered:** Iterative Constructs (`for` loop), Array Data Structures, Numerical Data Types, Accumulation Principles.

  * **Problem Description:** A function, designated `sumArray(numbers)`, is to be constructed. This function shall receive an array of numerical values and shall subsequently return their cumulative sum.

  * **Input Example:** `sumArray([1, 2, 3, 4, 5])`

  * **Output Example:** `15`

  * **Edge Cases to Consider:** The behavior when confronted with an empty array is to be determined. (A return value of 0 is typically expected.)

### 4\. Object Property Retrieval

  * **Concept(s) Covered:** Object Data Structures, Property Access Mechanisms (dot notation and bracket notation).

  * **Problem Description:** A function, designated `getProperty(obj, key)`, is to be implemented. This function shall accept an object, `obj`, and a string literal, `key`, and shall subsequently return the value associated with the specified property.

  * **Input Example:** `getProperty({ name: "Bob", age: 30 }, "name")`

  * **Output Example:** `"Bob"`

  * **Edge Cases to Consider:** The outcome when the `key` does not correspond to an existing property within the `obj` is to be ascertained. (A return value of `undefined` is anticipated.)

### 5\. Celsius to Fahrenheit Conversion Utility

  * **Concept(s) Covered:** Functions, Numerical Data Types, Arithmetic Operations.

  * **Problem Description:** A function, designated `celsiusToFahrenheit(celsius)`, is to be developed. This function shall effectuate the conversion of a temperature value from the Celsius scale to the Fahrenheit scale. The prescribed formula is: $F = C \\times 9/5 + 32$.

  * **Input Example:** `celsiusToFahrenheit(0)`, `celsiusToFahrenheit(25)`

  * **Output Example:** `32`, `77`

  * **Edge Cases to Consider:** For this straightforward conversion, no specific edge cases are identified; however, the implications of floating-point precision in practical applications should be acknowledged.

### 6\. Identification of the Greater Numerical Value

  * **Concept(s) Covered:** Conditional Branching (`if/else` or Ternary Operator), Comparison Operations.

  * **Problem Description:** A function, designated `findLarger(num1, num2)`, is to be created. This function shall accept two numerical values and shall subsequently return the numerically greater of the two. In instances of numerical equivalence, either value may be returned.

  * **Input Example:** `findLarger(10, 5)`, `findLarger(7, 7)`

  * **Output Example:** `10`, `7`

  * **Edge Cases to Consider:** No specific edge cases are identified.

### 7\. String Reversal Mechanism

  * **Concept(s) Covered:** Iterative Constructs (`for` loop), String Manipulation, String Concatenation or Array Conversion.

  * **Problem Description:** A function, designated `reverseString(str)`, is to be authored. This function shall accept a string literal and shall subsequently yield a new string with its constituent characters arranged in inverted sequence.

  * **Input Example:** `reverseString("hello")`

  * **Output Example:** `"olleh"`

  * **Edge Cases to Consider:** The treatment of an empty string or a single-character string warrants consideration.

### 8\. Vowel Enumeration

  * **Concept(s) Covered:** Iterative Constructs (`for` loop), String Manipulation, Conditional Branching (`if` statements), String Methods (`toLowerCase`, `includes`).

  * **Problem Description:** A function, designated `countVowels(str)`, is to be devised. This function shall accept a string literal and shall subsequently return the numerical count of vowels (a, e, i, o, u) present within it. The operation shall be case-insensitive.

  * **Input Example:** `countVowels("Programming")`

  * **Output Example:** `3`

  * **Edge Cases to Consider:** The behavior when presented with an empty string, a string devoid of vowels, or a string comprising solely uppercase vowels is to be ascertained.

### 9\. Basic Arithmetic Calculator

  * **Concept(s) Covered:** Functions, Conditional Branching (`switch` statement or `if/else`), Arithmetic Operations.

  * **Problem Description:** A function, designated `calculator(num1, num2, operator)`, is to be implemented. This function shall accept two numerical values and a string literal representing an operator (`"+", "-", "*", "/"`). It shall then execute the specified arithmetic operation and return the resultant value. Division by zero scenarios must be appropriately managed.

  * **Input Example:** `calculator(10, 5, "+")`, `calculator(8, 2, "/")`

  * **Output Example:** `15`, `4`

  * **Edge Cases to Consider:** The handling of division by zero (a return value of "Cannot divide by zero" is suggested) and the management of invalid operator inputs (a return value of "Invalid operator" is suggested) are critical.

### 10\. Array Extremity Element Retrieval

  * **Concept(s) Covered:** Array Data Structures, Array Indexing.

  * **Problem Description:** A function, designated `getFirstAndLast(arr)`, is to be constructed. This function shall accept an array and shall subsequently return a new array containing solely its initial and terminal elements.

  * **Input Example:** `getFirstAndLast([10, 20, 30, 40])`

  * **Output Example:** `[10, 40]`

  * **Edge Cases to Consider:** The outcome when the array comprises only a single element (the return of `[element, element]` is expected) and when the array is empty (the return of `[]` or error handling is to be determined) warrants attention.

## Hard Challenges (Focus on Advanced Concepts)

These challenges necessitate a profound understanding of sophisticated array and object manipulation methods, contemporary ES6+ features, asynchronous JavaScript paradigms, and complex problem-solving methodologies.

### 1\. Flattening of Nested Array Structures

  * **Concept(s) Covered:** Recursion, Array Methods (`isArray`, `concat`, `reduce`), Iterative Processing.

  * **Problem Description:** A function, designated `flattenArray(arr)`, is to be formulated. This function shall accept a potentially nested array (i.e., an array capable of containing other arrays) and shall subsequently yield a new array wherein all constituent elements are rendered into a single, non-nested level.

  * **Input Example:** `flattenArray([1, [2, 3], [4, [5, 6]]])`

  * **Output Example:** `[1, 2, 3, 4, 5, 6]`

  * **Edge Cases to Consider:** The behavior when presented with an empty array, an array devoid of nested arrays, or arrays exhibiting profound nesting levels is to be thoroughly examined.

### 2\. Implementation of a Debounce Mechanism

  * **Concept(s) Covered:** Higher-Order Functions, Closures, Asynchronous Timing (`setTimeout`, `clearTimeout`), Contextual Binding (`this`).

  * **Problem Description:** A function, designated `debounce(func, delay)`, is to be devised. This function shall accept a function, `func`, and a `delay` duration expressed in milliseconds. It shall subsequently return a novel function which, upon invocation, will execute `func` solely if the specified `delay` milliseconds have elapsed without subsequent invocations. This pattern is frequently employed for the optimization of interactive elements such as search input fields or window resize events.

  * **Input Example:**

    ```javascript
    const logClick = () => console.log("Button Clicked!");
    const debouncedClick = debounce(logClick, 500);
    // Multiple rapid invocations of debouncedClick; only the final invocation should trigger after 500ms.
    debouncedClick();
    debouncedClick();
    setTimeout(debouncedClick, 300); // This invocation is anticipated to be the terminal trigger.
    ```

  * **Output Example:** (Subsequent to approximately 800ms total elapsed time) `"Button Clicked!"` (single occurrence).

  * **Edge Cases to Consider:** The methodology for handling arguments passed to the debounced function, and the preservation of the `this` context if `func` constitutes an object method, necessitate careful consideration. (Hint: The `apply` or `call` methods may prove instrumental.)

### 3\. Deep Merging of Object Structures

  * **Concept(s) Covered:** Object Data Structures, Recursion, Object Property Enumeration (`Object.keys()`, `hasOwnProperty`), Immutability Principles.

  * **Problem Description:** A function, designated `deepMerge(obj1, obj2)`, is to be constructed. This function shall accept two objects and shall subsequently yield a new object representing a deep amalgamation of `obj1` and `obj2`. In instances where a key is present in both objects and its corresponding value is itself an object, a recursive merging operation shall be performed. Otherwise, the value from `obj2` shall supersede that from `obj1`.

  * **Input Example:**

    ```javascript
    const objA = { a: 1, b: { c: 2, d: { e: 3 } }, f: [1, 2] };
    const objB = { b: { c: 4, g: 5 }, h: 6, f: [3, 4] };
    deepMerge(objA, objB);
    ```

  * **Output Example:**

    ```javascript
    { a: 1, b: { c: 4, d: { e: 3 }, g: 5 }, f: [3, 4], h: 6 }
    ```

  * **Edge Cases to Consider:** The appropriate handling of array data types (whether they should be merged or entirely replaced), the management of `null` or `undefined` values, and the potential for circular references (an advanced, albeit optional, consideration) are critical.

### 4\. Implementation of `Promise.all` Functionality

  * **Concept(s) Covered:** Promises, Asynchronous Control Flow (`async/await` or `.then()/.catch()`), Array Iteration, Error Handling Mechanisms.

  * **Problem Description:** A custom implementation of `Promise.all`, designated `myPromiseAll(promises)`, is to be developed. This function shall accept an array of Promise objects and shall subsequently return a singular Promise. This returned Promise shall resolve with an array containing all resolved values from the input promises, maintaining their original order. Should any of the input promises reject, the returned Promise shall reject with the reason provided by the initial promise to reject.

  * **Input Example:**

    ```javascript
    const p1 = Promise.resolve(3);
    const p2 = new Promise(resolve => setTimeout(() => resolve(42), 100));
    const p3 = Promise.reject('Error!');
    myPromiseAll([p1, p2]) // Expected to resolve with [3, 42]
    myPromiseAll([p1, p3, p2]) // Expected to reject with 'Error!'
    ```

  * **Output Example:** (Resolved value) `[3, 42]`, (Rejected value) `'Error!'`

  * **Edge Cases to Consider:** The behavior when presented with an empty array of promises or the inclusion of non-promise values within the input array requires evaluation.

### 5\. Currying Function Implementation

  * **Concept(s) Covered:** Higher-Order Functions, Closures, Function Argument Handling.

  * **Problem Description:** A function, designated `curry(func)`, is to be authored. This function shall accept a function, `func`, and shall subsequently return a curried variant thereof. A curried function is characterized by its acceptance of one argument at a time, returning a new function until all requisite arguments have been received, whereupon the original function is executed.

  * **Input Example:**

    ```javascript
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    curriedAdd(1)(2)(3); // Expected return: 6
    curriedAdd(1, 2)(3); // Expected return: 6
    curriedAdd(1)(2, 3); // Expected return: 6
    ```

  * **Output Example:** `6`

  * **Edge Cases to Consider:** The application to functions devoid of arguments or functions accepting a variable number of arguments (`...rest`) necessitates examination.

### 6\. Elementary Memoization (Caching) Mechanism

  * **Concept(s) Covered:** Closures, Object Data Structures (for caching), Performance Optimization Techniques.

  * **Problem Description:** A function, designated `memoize(func)`, is to be developed. This function shall accept a function, `func`, and shall subsequently return a memoized iteration thereof. The memoized function is mandated to cache the results of `func` invocations based upon their respective arguments. In the event of subsequent invocations with identical arguments, the cached result shall be returned, thereby precluding re-execution of `func`.

  * **Input Example:**

    ```javascript
    const expensiveCalculation = (num) => {
      console.log('Calculating...');
      return num * num;
    };
    const memoizedCalc = memoize(expensiveCalculation);
    memoizedCalc(5); // Console output: "Calculating...", return value: 25
    memoizedCalc(5); // No console output, return value: 25 (retrieved from cache)
    memoizedCalc(10); // Console output: "Calculating...", return value: 100
    ```

  * **Output Example:** (Console output)

    ```
    Calculating...
    Calculating...
    ```

  * **Edge Cases to Consider:** The methodology for managing multiple arguments (a rudimentary approach involves serializing arguments as a cache key) and the implications of object or array arguments (due to reference equality) are to be addressed.

### 7\. Validation of Simple JSON Schema

  * **Concept(s) Covered:** Object Data Structures, Recursion, Type Verification (`typeof`, `Array.isArray`), Control Flow Mechanisms.

  * **Problem Description:** A function, designated `validate(data, schema)`, is to be implemented. This function shall effectuate the validation of a `data` object against a rudimentary `schema` object. The schema is to define the anticipated `type` for properties (`"string"`, `"number"`, `"boolean"`, `"object"`, `"array"`). For object types, the schema may additionally specify nested properties.

  * **Input Example:**

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
    validate(data, schema); // Expected return: true
    validate({ name: 123 }, schema); // Expected return: false
    ```

  * **Output Example:** `true` or `false`

  * **Edge Cases to Consider:** The implications of omitted requisite properties, the presence of extraneous properties not defined in the schema (which may be disregarded or flagged), and the occurrence of incorrect data types are paramount. The handling of array types (e.g., via an `items` property within the schema to specify element types) also warrants consideration.

### 8\. Elementary Event Emitter

  * **Concept(s) Covered:** Object Data Structures, Closures, Array Data Structures, Functions, Contextual Binding (`this`).

  * **Problem Description:** A rudimentary `EventEmitter` class (or factory function) is to be created, facilitating the registration and triggering of events. This construct shall possess an `on(eventName, listener)` method for callback registration and an `emit(eventName, ...args)` method for the invocation of all registered listeners pertinent to a given event.

  * **Input Example:**

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

  * **Output Example:**

    ```
    Handler 1: { message: 'Success!' }
    Handler 2: { message: 'Success!' }
    Error: Something went wrong!
    ```

  * **Edge Cases to Consider:** The behavior when an event possesses no registered listeners, and the mechanism for listener removal (via an `off` method, an optional but beneficial extension), are to be addressed.

### 9\. Pagination Logic Implementation

  * **Concept(s) Covered:** Array Methods (`slice`), Numerical Data Types, Mathematical Functions (`Math.ceil`), Functional Constructs.

  * **Problem Description:** A function, designated `getPaginatedData(data, pageSize, pageNumber)`, is to be authored. This function shall accept an array of `data`, a `pageSize` (representing the number of items per page), and a `pageNumber` (1-indexed). It shall subsequently return a new array containing the items corresponding to the specified page. Additionally, the total count of pages shall be returned.

  * **Input Example:**

    ```javascript
    const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
    getPaginatedData(items, 10, 1); // First page
    getPaginatedData(items, 10, 3); // Third page (expected to contain the final 5 items)
    ```

  * **Output Example:**

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

  * **Edge Cases to Consider:** The handling of an empty data array, a `pageSize` of zero or a negative value, and a `pageNumber` that falls outside the permissible range (where an empty array for `pageItems` is typically returned) warrants careful consideration.

### 10\. Asynchronous Data Fetching with Retry Mechanism

  * **Concept(s) Covered:** Asynchronous Control Flow (`async/await`), Promises, Error Handling (`try/catch`), Asynchronous Timing (`setTimeout`), Recursion (or iterative constructs), Error Handling.

  * **Problem Description:** An `async` function, designated `fetchWithRetry(url, retries = 3, delay = 1000)`, is to be formulated. This function shall endeavor to retrieve data from a specified `url`. In the event of a retrieval failure (e.g., network discontinuity, non-2xx HTTP status code), the function shall reattempt the request up to `retries` times, incorporating a `delay` period between each successive attempt. Should all retries prove unsuccessful, an error shall be propagated.

  * **Input Example:**

    ```javascript
    // A mock fetch implementation is assumed, configured to fail twice prior to achieving success.
    let attempt = 0;
    global.fetch = jest.fn((url) => {
      attempt++;
      if (attempt < 3) {
        return Promise.reject(new Error('Simulated network error'));
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'Success after retries' })
      });
    });

    fetchWithRetry('https://api.example.com/data', 3, 100);
    ```

  * **Output Example:** (Subsequent to retry attempts) `{ data: 'Success after retries' }`

  * **Edge Cases to Consider:** The implications of a `retries` parameter set to zero or a negative value, a `delay` parameter set to zero, and the categorization of error types that necessitate a retry versus immediate failure, are to be thoroughly analyzed.
