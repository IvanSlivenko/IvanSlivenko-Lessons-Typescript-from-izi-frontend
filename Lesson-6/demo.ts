const headerElement = document.getElementById("test-header");

console.log((headerElement as HTMLHeadingElement).textContent);
console.log((<HTMLHeadingElement>headerElement).textContent);
console.log(headerElement?.textContent);

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Join",
  age: 30,
};

function fetchUser(): unknown {
  return {
    name: "John",
    age: 30,
  };
}

const data = fetchUser();
console.log("data", data);

const ourUser = data as User;
console.log("ourUser.name", ourUser.name);
console.log("ourUser.age", ourUser.age);
