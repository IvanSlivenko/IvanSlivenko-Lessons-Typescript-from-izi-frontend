// any
let anything: any = "I am a string";
anything = 5;
anything = { name: "Ivan" };
anything = ["Ivan", "Viktor"];

console.log("anything", anything);

// unknown
let something: unknown = "I am a string";

console.log("something", something);

//never
function throwError(message: string): never {
  throw new Error(message);
}

throwError("This is error");

function unionTypesCheking(ourParameter: string | number) {
  if (typeof ourParameter === "string") {
    console.log(ourParameter.toUpperCase());
  } else if (typeof ourParameter === "number") {
    console.log(ourParameter + 5);
  } else {
    console.log("I am not sure what your are");
  }
}

unionTypesCheking(44);
