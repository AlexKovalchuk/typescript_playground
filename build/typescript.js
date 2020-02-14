const map = new Map();
map.set("1", "str1");
map.set(2, "num1");
map.set(true, "bool1");
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);
let john = { name: "John" };
map.set(john, 'smithy');
console.log(map.get(john));
map.forEach((value, key, map) => {
    console.log(`value = ${value}, key = ${key}, map = ${map}`);
});
const obj = {
    name: "John",
    age: 30
};
let set = new Set();
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log('set', set);
set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});
//# sourceMappingURL=typescript.js.map