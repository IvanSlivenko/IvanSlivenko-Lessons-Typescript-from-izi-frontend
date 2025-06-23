// union types:
type Id = string | number;
const userId = 123;
console.log("userId", userId);

const postId = "abc";
console.log("postId", postId);

type Status = "active" | "inactive" | "pending";

const CurrentStatus: Status = "pending" 
console.log("CurrentStatus", CurrentStatus);


type PersonType = {
  name: string;
  age: number;
  isActive?: boolean;
};

// Pick
type Name = Pick<PersonType, "name">;

// type intersection ( similar to extends to interfasec )
type EmployeeType = PersonType & {
  salary: number;
  position: string;
  departament?: string;
};
const MyName: Name = {
  name: "Ivan",
};

// Omit
type IsActive = Omit<PersonType, "name" | "age">;
const active: IsActive = {
  isActive: true,
};

type ManagerType = EmployeeType & {
  teamSize: number;
};

const bigBoss: ManagerType = {
  name: "Ivan",
  age: 43,
  isActive: true,
  salary: 100,
  position: "develouper",
  departament: "fiflial",
  teamSize: 35,
};

console.log("bigBoss :", bigBoss);
