"use strict";
function summ(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
};
function sayHello(name = "TypeScript") {
    return `Helo ${name}`;
}
function sayHelloOptional(name) {
    return `Hello ${name || ""}`;
}
function ourOwnLog(message) {
    console.log(message);
}
function sumAllNumbers(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}
const divide = (numberOne, numberTwo) => {
    if (numberTwo === 0) {
        console.warn("Division by zero is not allowed.");
        return 0;
    }
    return numberOne / numberTwo;
};
const subtract = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
};
console.log("summ :", summ(5, 5));
console.log("multiply :", multiply(5, 5));
console.log("sayHello :", sayHello("Ivan"));
console.log("sayHello :", sayHello());
console.log("sayHelloOptional", sayHelloOptional());
console.log("sayHelloOptional", sayHelloOptional("Ivan"));
ourOwnLog("Im study Typescript");
console.log("sumAllNumbers", sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log("divide :", divide(10, 2));
console.log("subtract", subtract(10, 2));
