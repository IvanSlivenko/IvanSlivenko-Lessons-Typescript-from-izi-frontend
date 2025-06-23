interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

interface Person {
  surname?: string;
}

interface Employee {
  salary: number;
  position: string;
  departament?: string;
}

interface Manager extends Employee, Person {
  teameSize: number;
}

class User implements Person, Employee {
  name: string;
  age: number;
  isActive: boolean;
  salary: number;
  position: string;
  departament?: string | undefined;
  surname?: string | undefined;

  constructor(
    name: string,
    age: number,
    isActive: boolean,
    salary: number,
    position: string,
    departament: "",
    surname: string
  ) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
    this.salary = salary;
    this.position = position;
    this.departament = departament;
    this.surname = surname;
  }
}

class BigBoss implements Manager {
  name: string;
  age: number;
  isActive: boolean;
  salary: number;
  position: string;
  teameSize: number;

  constructor(
    name: string,
    age: number,
    isActive: boolean,
    salary: number,
    position: string,
    teameSize: number
  ) {
    this.name=name;
    this.age=age;
    this.isActive=isActive;
    this.salary=salary;
    this.position=position;
    this.teameSize=teameSize;
  }
}
