// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }

// // Employee can extend Person
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name);
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // Error: The 'Person' constructor is protected
// console.log(howard);
// let howardElevator = howard.getElevatorPitch();
// console.log(howardElevator);
// console.log(john);

// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor (theName: string) {
//       this.name = theName;
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// console.log(dad);
// dad.name = 'New dad name';
// console.log(dad.name);

// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {
//   }
// }

// class Employee {
//   fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }

// class Employee {
//     private _fullName: string;
//     private fullNameMaxLength: number = 10;
//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (newName && newName.length > this.fullNameMaxLength) {
//             throw new Error("fullName has a max length of " + this.fullNameMaxLength);
//         }
        
//         this._fullName = newName;
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }
// console.log('end')

// class Grid {
//   static origin = {x: 0, y: 0};
//   public calculateDistanceFromOrigin = (point: {x: number; y: number;}) => {
//       let xDist = (point.x - Grid.origin.x);
//       let yDist = (point.y - Grid.origin.y);
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
      console.log("roaming the earth...");
  }
}

abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
  abstract generateReports(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

  constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
      console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports();

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting || null;
  }
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter('Alex');
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker(null);
console.log(greeter2.greet()); // "Hey there!"

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);
