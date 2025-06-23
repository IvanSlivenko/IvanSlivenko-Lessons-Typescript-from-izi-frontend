interface Person {
    name: string;
    age: number;
    isActive: boolean;
}


interface Employee {
    salary: number;
    position: string;
    departament?: string;
}

class User implements Person, Employee {
    name: string;
    age: number;
    isActive: boolean;
    salary: number;
    position: string;
    departament?: string | undefined;

    constructor(
        name: string,
        age: number,
        isActive: boolean,
        salary: number,
        position: string,
        departament: ''
    )
    {
        this.name=name;
        this.age=age;
        this.isActive=isActive;
        this.salary=salary;
        this.position=position;
        this.departament=departament
    }
}