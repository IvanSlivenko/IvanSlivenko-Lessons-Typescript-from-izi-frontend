function summ(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}

const multiply = (numberOne: number, numberTwo: number): number => {
  return numberOne * numberTwo;
};

function sayHello(name = "TypeScript"): string {
  return `Helo ${name}`;
}

function sayHelloOptional(name?: string): string {
  return `Hello ${name || ""}`;
}

function ourOwnLog(message: string): void {
  console.log(message);
}

function sumAllNumbers(...numbers: number[]) {
  return numbers.reduce((acc, number) => acc + number, 0);
}

type MathFunction = (
  numberOne: number,
  numberTwo: number
) => number | undefined;

const divide: MathFunction = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    console.warn("Division by zero is not allowed.");
    return 0;
  }
  return numberOne / numberTwo;
};

const subtract: MathFunction = (numberOne, numberTwo) => {
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
