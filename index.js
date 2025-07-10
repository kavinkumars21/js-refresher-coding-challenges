console.log("Welcome");

const greet = (name) => {
    console.log(`"Hello, ${name}!"`);
}

greet("kavin");

var number = 15;

if(number % 2 === 0){
    console.log("even");
} else {
    console.log("odd");
}

var arr = [1,2,3,4,5];

const sumArray = (array) => {
    let total = 0;
    array.forEach(element => {
        total+=element;
    });
    console.log("sum of array elements",total);
}

sumArray(arr);

const getProperty = (obj,key) => {
    console.log(obj[key]);
}

const user = {name : "kavin", age : 30};

getProperty(user,"name");

const celsiusToFahrenheit = (C) => {
    const F = C * 9 / 5 + 32;
    console.log(F);
}

celsiusToFahrenheit(0)
celsiusToFahrenheit(25)

const findLargest = (num1, num2) => {
    if(num1 >= num2){
        console.log(num1);
    } else {
        console.log(num2);
        
    }
}

findLargest(5,10)
findLargest(7,7)

const reverseString = (string) => {
    let reverse = string.split('').reverse().join('')
    console.log(reverse);
    
}

reverseString("hello")

const countingVowel = (string) => {
    let vowels = "aeiou";
    let count = 0;
    for(let i=0; i<=string.length; i++){
        if(vowels.includes(string[i])){
            count++;
        }
    }
    console.log(count);   
}

countingVowel("helloworld");

const calculatore = (a,b,key) => {
    let result = 0;
    switch (key) {
        case "+":
            result = a+b
            break;
        case "-":
            result = a-b
            break;
        case "*":
            result = a*b
            break;
        case "/":
            result = a/b
            break;
    }
    console.log(result);
}

calculatore(5,5,"+")

const getFirstAndLast = (arr) => {
    let newArray = []
    newArray.push(arr[0])
    newArray.push(arr[arr.length - 1])
    console.log(newArray);
}

getFirstAndLast([10,20,30,40])
