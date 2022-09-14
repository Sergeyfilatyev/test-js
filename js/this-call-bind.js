// function foo() {
//   console.log(this);
// }

// foo();

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

// console.log(steamGreeter('Mango'));

// //
// const showTag = function () {
//   console.log(this);
//   console.log(this.tag);
// };
// const user = {
//   tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log(user);
// console.log(user.showUserTag);
// user.showUserTag();
// const outerShowTag = user.showUserTag;
// outerShowTag();

// CALL APPLY
// const showThis = function (...args) {
//   console.log(...args);
//   console.log(args);
//   console.log(this);
// };
// const objA = {
//   a: 5,
//   b: 3,
// };
// showThis();

// showThis.call(objA, 10, 15);
// showThis.apply(objA, [10, 15]);

// const changeColor = function (color) {
//   this.color = color;
//   console.log(this);
//   console.log(color);
// };
// const hat = {
//   color: 'black',
// };
// const sweater = {
//   color: 'green',
// };
// changeColor.call(hat, 'green');
// changeColor.apply(sweater, ['gray']);
//
// BIND(copy)
//
// const changeColor = function (color) {
//   this.color = color;
//   console.log(this);
//   console.log(color);
// };
// const hat = {
//   color: 'black',
// };
// const sweater = {
//   color: 'green',
// };
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('green');
// changeHatColor('red');

// //
// const counter = {
//   value: 0,
//   increment(value) {
//     this.value += value;
//   },
//   decrement(value) {
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//   counter.decrement();
//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//   counter.increment();
//   valueEl.textContent = counter.value;
// });
