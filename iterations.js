// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`Inner Loop ${j}`);
//   }
// }

// let myArray = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(`${myArray[i]}`);
// }

// for (let i = 1; i <= 16; i++) {
//   if (i == 10) {
//     console.log("10 Detected");
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

// for (let i = 1; i <= 16; i++) {
//   if (i == 10) {
//     console.log("10 Detected");
//     continue;
//   }
//   console.log(`Value of i is ${i}`);
// }

// let i = 1;
// do {
//   console.log(`value is ${i}`);
//   i++;
// } while (i <= 10);

// let Heroes = ["Superman", "Spiderman", "Batman", "Hulk"];
// const Print = (item) => {
//   console.log(item);
// };

// Heroes.forEach(Print);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// arr.forEach((num) => {
//   if (num > 5) {
//     newArr.push(num);
//   }
// });
// console.log(newArr);

//Chaining
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = numbers
//   .map((num) => num * 10)
//   .map((num1) => num1 * 2)
//   .filter((num2) => num2 > 100);
// console.log(result);
// let arr = [1, 2, 3, 4, 5];

//REDUCE
// let result = arr.reduce((accumulator, currentValue) => {
//   // Initial value (0) goes into accumulator, and on each iteration it stores the previous result and adds the currentValue
//   console.log(`${accumulator} and ${currentValue}`);
//   return accumulator + currentValue;
//   //we can give explicitly the value to initialValue like(let initialValue = 0)
// }, 0);

// console.log(`and the result is ${result}`);

let arr = [{ price: 20 }, { price: 2 }, { price: 2 }, { price: 2 }];
let result = arr.reduce((acc, currVal) => acc * currVal.price, 1);
console.log(result);
