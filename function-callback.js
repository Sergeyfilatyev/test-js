// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   return result;
// };
// const add = function (x, y) {
//   return x * y + x;
// };

// console.log(doMath(2, 3, add));
//
// const buttonRef = document.querySelector('.js-btn');
// const handleBtnClick = function () {
//   console.log('Click on btn');
// };
// buttonRef.addEventListener('click', handleBtnClick);
// console.log(buttonRef);

// const callback = function () {
//   console.log('after all 5s');
// };
// console.log('start');
// setTimeout(callback, 5000);
// console.log('second');

//

// function filter(array, test) {
//   const filteredArray = [];
//   for (const el of array) {
//     console.log(el);
//     console.log(test(el));
//     if (test(el)) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// }
// const callback1 = function (value) {
//   return value >= 3;
// };
// const callback2 = function (value) {
//   return value <= 5;
// };
// const r1 = filter([1, 2, 3, 4, 5, 6], callback1);
// console.log(r1);
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback2));
//

// // FOR EACH
// const numbers = [1, 2, 34, 5, 6];
// numbers.forEach((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// // MAP (Перебирает оригинальный массив
// // Возвращает новый массив)
// const numbers = [1, 2, 34, 5, 6];
// const newNumbers = numbers.map((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return (element * 10) / 2;
// });
// console.log(newNumbers);
// const players = [
//   { id: 'player1', name: 'Mango', points: 34 },
//   { id: 'player2', name: 'Apple', points: 39 },
//   { id: 'player3', name: 'Poly', points: 54 },
//   { id: 'player4', name: 'Lemon', points: 14 },
// ];
// // const namePlayers = players.map(player => {
// //   return player.name;
// // });
// // console.log(namePlayers);
// // const idPlayers = players.map(player => player.id);
// // console.log(idPlayers);
// const updatePlayers = players.map(player => {
//   return { ...player, points: player.points + 5 };
// });
// console.log(updatePlayers);

//
// FILTER
// const numbers = [1, 2, 34, 5, 6];
// const filteredNumbers = numbers.filter(number => {
//   console.log(number);
//   return number > 3;
// });
// console.log(filteredNumbers);
//

// FIND
// const numbers = [1, 2, 34, 5, 6];
// const findNumbers = numbers.find(number => number === 2);
// console.log(findNumbers);

//
// // EVERY
// const numbers = [1, 2, 34, 5, 6];
// const everyNumbers = numbers.every(number => number > 0);
// console.log(everyNumbers);

// // SOME
// const numbers = [1, 2, 34, 5, 6];
// const someNumbers = numbers.some(number => number > 33);
// console.log(someNumbers);
