"use strict";
class Animal {
    constructor(name, sound, legs) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
        this.head = 1;
    }
    makeSound() {
        console.log(this.sound);
    }
    numberOflegs() {
        console.log(`I have ${this.legs} legs`);
    }
    headCount() {
        console.log(`I have ${this.head} head`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "woof", 4);
    }
    makeSound() {
        console.log("Bakr");
    }
    describe() {
        console.log(`I am dog my name is ${this.name} and I have ${this.legs} legs`);
    }
}
const dog = new Dog("Buddy");
dog.describe();
dog.headCount();
dog.makeSound();
dog.name = 'Rex';
dog.describe();
