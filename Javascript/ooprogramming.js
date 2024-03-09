class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
    console.log(`${this.name} slept. Energy increased to ${this.energy}.`);
  }

  doSomethingFun() {
    this.energy -= 10;
    console.log(`${this.name} did something fun. Energy decreased to ${this.energy}.`);
  }
}

// Example usage
const tom = new Person();
console.log(`${tom.name}, ${tom.age} years old, Energy: ${tom.energy}`);

tom.sleep();
tom.doSomethingFun();

class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
    console.log(`${this.name} went to work. Experience points increased to ${this.xp}.`);
  }
}

// Example usage
const worker1 = new Worker();
console.log(`${worker1.name}, ${worker1.age} years old, Energy: ${worker1.energy}, XP: ${worker1.xp}, Hourly Wage: $${worker1.hourlyWage}`);

worker1.sleep();
worker1.doSomethingFun();
worker1.goToWork();


function intern() {
  const internObj = new Worker("Bob", 21, 110, 0, 10);
  internObj.goToWork();
  return internObj;
}

// Example usage
const newIntern = intern();
console.log(`${newIntern.name}, ${newIntern.age} years old, Energy: ${newIntern.energy}, XP: ${newIntern.xp}, Hourly Wage: $${newIntern.hourlyWage}`);


function manager() {
  const managerObj = new Worker("Alice", 30, 120, 100, 30);
  managerObj.doSomethingFun();
  return managerObj;
}

// Example usage
const newManager = manager();
console.log(`${newManager.name}, ${newManager.age} years old, Energy: ${newManager.energy}, XP: ${newManager.xp}, Hourly Wage: $${newManager.hourlyWage}`);
