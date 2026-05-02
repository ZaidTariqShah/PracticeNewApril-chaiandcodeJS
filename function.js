// function task(x, y) {
//   return `x + y = ${x + y}`;
// }
// const result = task(6, 4);
// console.log(result);

// function loginUserMessage(username = "Asalamualikum") { //default Values
//   if (!username) {
//     console.log("Please enter a username first");
//     return;
//   }
//   return `${username} just logged in`;
// }
// let result = loginUserMessage();
// if (result) console.log(result);

// function addNumbers(...nums) {
//   let sum = 0;
//   nums.forEach((i) => {
//     sum += i;
//   });
//   return sum;
// }
// const sum = addNumbers(1, 2, 3, 4, 5);
// console.log(`The Sum is ${sum}`);

// function one() {
//   const username = "hitesh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }

//   console.log(website);

//   two();
// }

// one();

// if (true) {
//   const username = "hitesh";

//   if (username === "hitesh") {
//     const website = " youtube";
//     console.log(username + website);
//   }

//   // console.log(website);
// }

// console.log(username);

const addOne = function (num) {
  return num + 1;
};
console.log(addOne(9));
