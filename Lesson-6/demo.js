"use strict";
const headerElement = document.getElementById("test-header");
console.log(headerElement.textContent);
console.log(headerElement.textContent);
console.log(headerElement?.textContent);
const user = {
    name: "Join",
    age: 30,
};
function fetchUser() {
    return {
        name: "John",
        age: 30,
    };
}
const data = fetchUser();
console.log("data", data);
const ourUser = data;
console.log("ourUser.name", ourUser.name);
console.log("ourUser.age", ourUser.age);
