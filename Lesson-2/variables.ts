console.log(" lesson - 2");

// Prirmitive types
const myString: string = "Hello world";
const myNumber: number = 42;
const myBoolean: boolean = true;
const undefinedVariable: undefined = undefined;
const nullVariables: null = null;
const bigIntNumber: bigint = 100n;
const symbolVariable: symbol = Symbol("mySymbol");

console.log("myString", myString);
console.log("myNumber", myNumber);
console.log("myBoolean", myBoolean);

console.log("bigIntNumber", bigIntNumber);
console.log("symbolVariable", symbolVariable);

console.log("---------------------------");

// Object types

const stringArray: string[] = ["apple", "banana", "chery"];
const myArray: string[] = ["Hello", "Word"];

// const user: { name: string; age: number; isActive: boolean } = {
//   name: "Ivan",
//   age: 43,
//   isActive: true,
// };

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const user: User= {
  name: "Ivan",
  age: 43,
  isActive: true,
}

console.log("stringArray", stringArray);
console.log("myArray", myArray);
console.log("user", user);
console.log("==============================");
