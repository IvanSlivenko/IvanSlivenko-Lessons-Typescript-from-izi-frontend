type PersonType = {
  name: string;
  age: number;
  isActive?: boolean;
};

// type intersection ( similar to extends to interfasec )
type EmployeeType = PersonType & {
  salary: number;
  position: string;
  departament?: string;
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
    teamSize: 35
}

console.log("bigBoss :",bigBoss);
