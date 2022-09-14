// Function

// const calculatedTotalPrice = function (items) {
//   let total = 0;
//   console.log('items in function', items);
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// console.log(calculatedTotalPrice([1, 45, 24, 23]));
// console.log(calculatedTotalPrice([1, 4, 4, 21]));
// console.log(calculatedTotalPrice([1, 5, 2, 18]));
// console.log(calculatedTotalPrice([1, 8, 13, 55]));

// function logItems(items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }
// console.log(logItems(['Mango', 'Kiwi', 'Poly']));

// const allLogins = ['ksdhfjkfhkjs', 'jdfkhdsjh', 'iotuyiotyu', 'fjkhgoioq', 'qwerty'];
// const findLogin = function (logins, login) {
//   const message = logins.includes(login)
//     ? `${login} this is done login`
//     : `${login} this is not login`;
//   return message;
// };

// console.log(findLogin(allLogins, 'eioruoier'));
// console.log(findLogin(allLogins, 'qwerty'));
// console.log(findLogin(allLogins, 'Qwerty'));
// console.log(findLogin(allLogins, 'yewruweyiu'));
// console.log(findLogin(allLogins, 'jkfgljdlkgfjlkd'));
// console.log(findLogin(allLogins, 'jdfkhdsjh'));

// function findSmallNumber(numbers) {
//   let smallNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallNumber > number) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber;
// }

// console.log(findSmallNumber([10, 4, 4, 21]));
// console.log(findSmallNumber([55, -45, 24, 23]));
// console.log(findSmallNumber([16, 5, 2, 18]));
// console.log(findSmallNumber([1, 8, 13, 55]));

// function fn(a, ...args) {
//   console.log(a);
//   console.log(args);
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }
// fn('Hello', 1, 2, 5, 3, 4);
// fn('Hello', 1, 2, 5, 3);
// fn('Hello', 1, 2, 5, 3, 4, 9, 10, 7);
// fn('Hello', 1, 2);

// function add(...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 2, 3, 8, 89, 4));
// console.log(add(8, 89, 4));
// console.log(add(3, 8, 89, 4));

// function filterNumbers(array, ...args) {
//   console.log(array);
//   console.log(args);
//   let newArray = [];
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       newArray.push(arg);
//     }
//   }
//   return newArray;
// }
// console.log(filterNumbers([2, 6, 4, 2, 78], 1, 8, 6, 78));
// console.log(filterNumbers([1, 7, 5, 71, 16], 1, 5, 9, 23));
// console.log(filterNumbers([3, 8, 6, 4, 18], 1, 4, 13, 2));
