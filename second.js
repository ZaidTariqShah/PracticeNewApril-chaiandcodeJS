const num2 = new Number(100);
console.log(num2);
console.log(typeof num2);

const charr = new String("Hey");
console.log(charr);
console.log(typeof charr);
//toString(),toFixed(),Math.abs(),Math.round(),Math.ceil(),Math.floor(),Math.min(),Math.max()
let max = 20; // max min defines the range
let min = 10;
console.log(Math.floor(Math.random() * (max - min) + 1) + 40); // we add 1 at the end because we dont want 0 and we want 10
