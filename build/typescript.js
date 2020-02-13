console.log('hello typescript');
class Person {
}
let p;
p = new Person();
let x;
let y = { name: "Alice", location: "Seattle" };
x = y;
console.log('x', x);
function greet(n) {
    console.log("Hello, " + n.name);
}
function invokeLater(args, callback) {
    callback(...args);
}
invokeLater([1, 2], (x, y) => console.log(x + " && " + y));
invokeLater([1], (x, y) => console.log(x + " && " + y));
class Animal {
    constructor(name, numFeet) {
        this.name = name;
        this.feet = numFeet;
    }
}
class Size {
    constructor(numFeet) { }
}
let a = new Animal('Oscar', 4);
let s;
console.log(a, s);
//# sourceMappingURL=typescript.js.map