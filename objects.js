let obj = { 1: "a", 2: "b" };
let obj1 = { 3: "c", 4: "d" };
const obj2 = { ...obj, ...obj1 };
console.log(obj2);
//Object.keys(),Object.values(),Object.entries(),hasOwnProperty();

const newObj = { name: "hi", age: 30 };
const { name: N } = newObj;
const { name } = newObj;
console.log(name);
console.log(N);
