// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return Animal;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports();
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting || null;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter('Alex');
console.log(greeter1.greet()); // "Hello, there"
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker(null);
console.log(greeter2.greet()); // "Hey there!"
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
//# sourceMappingURL=index.js.map