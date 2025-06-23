"use strict";
// any
let anything = "I am a string";
anything = 5;
anything = { name: "Ivan" };
anything = ["Ivan", "Viktor"];
console.log("anything", anything);
// unknown
let something = "I am a string";
console.log("something", something);
//never
function throwError(message) {
    throw new Error(message);
}
throwError("This is error");
function unionTypesCheking(ourParameter) {
    if (typeof ourParameter === "string") {
        console.log(ourParameter.toUpperCase());
    }
    else if (typeof ourParameter === "number") {
        console.log(ourParameter + 5);
    }
    else {
        console.log("I am not sure what your are");
    }
}
unionTypesCheking(44);
