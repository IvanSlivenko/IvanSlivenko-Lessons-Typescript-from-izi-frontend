let userId: string | number;

userId = 123;
userId = "Max";

const greetUser = (user: string | number) => {
  if (typeof user === "string") {
    console.log("Hello", user.toUpperCase());
  }

  if (typeof user === "number") {
    console.log(`Hello, user with id ${user}`);
  }
};

greetUser("Max");
greetUser(123);

type Car = {
  wheels: number;
  engine: string;
};

type Boat = {
  sails: number;
  engine: string;
};

type Amphibia = Car & Boat;

const superVehicle: Amphibia = {
    wheels: 4,
    sails: 2,
    engine: "V8"
}

console.log(superVehicle);

