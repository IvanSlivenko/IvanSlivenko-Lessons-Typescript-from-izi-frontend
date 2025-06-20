class Animal {
  public name: string;
  protected sound: string;
  protected legs: number;
  //   private readonly head: number;
  private head: number;

  constructor(name: string, sound: string, legs: number) {
    this.name = name;
    this.sound = sound;
    this.legs = legs;
    this.head = 1;
  }

  public makeSound() {
    console.log(this.sound);
  }

  public numberOflegs() {
    console.log(`I have ${this.legs} legs`);
  }

  public headCount() {
    console.log(`I have ${this.head} head`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "woof", 4);
  }

  public makeSound() {
    console.log("Bakr");
  }

  public describe() {
    console.log(
      `I am dog my name is ${this.name} and I have ${this.legs} legs`
    );
  }
}

const dog = new Dog("Buddy");

dog.describe();
dog.headCount();
dog.makeSound();

dog.name = 'Rex';
dog.describe();
