// const objC = {
//   z: 'a',
// };
// console.log(objC.hasOwnProperty('z'));
// const objB = Object.create(objC);
// objB.y = 3;
// console.log(objB);
// console.log(objB.z);
// const objA = Object.create(objB);
// objA.q = 9;
// console.log(objA);
// console.log(objA.z);
// console.log(objA.y);
// const objR = [1, 2, 3];
// const objX = Object.create(objR);
// console.log(objR);
// console.log(objX);

// Функция конструктор с большой буквы
// const Car = function (value) {
//   console.log(this);
//   this.a = value;
// };
// const myCar1 = new Car(5);
// console.log(myCar1);
// const myCar2 = new Car(10);
// console.log(myCar2);
//
// const Car = function ({ brand, model, price } = {}) {
//   console.log(this);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// const audi = new Car({ brand: 'Audi', model: 'Q5', price: 350000 });
// console.log(audi);
// const bmw = new Car({ brand: 'BMW', model: 'X6', price: 400000 });
// console.log(bmw);
// const tesla = new Car();
// console.log(tesla);
// // Car.prototype.sayHi = function () {
// //   console.log(this);
// //   console.log('Hello');
// // };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(audi.changePrice(50000));
// bmw.changePrice(78000);
//
// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
//   // Change code above this line
// }
// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(newCar.getBrand());
// console.log(newCar.changeBrand('Honda'));

//
// const CounterPlugin = function ({ initialValue = 0, step = 1 } = {}) {
//   this._value = initialValue;
//   this._step = step;
// };
// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };
// const counter = new CounterPlugin({ step: 10 });
// console.log(counter);
// counter.increment();
// console.log(counter);
// counter.decrement();
//
// Геттеры и сеттеры
//
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this._model = model;
//     this.price = price;
//   }
//   //   getBrand() {
//   //     return this.brand;
//   //   }
//   //   setBrand(newBrand) {
//   //     this.brand = newBrand;
//   //   }
//   get model() {
//     return this._model;
//   }
//   set model(newModel) {
//     this._model = newModel;
//   }
// }
// const carInstance = new Car({ brand: 'Audi', model: 'q3', price: 32000 });
// // console.log(carInstance.getBrand());
// // carInstance.setBrand('BMW');
// // console.log(carInstance.getBrand());
// console.log(carInstance);
// carInstance.model = 'q4';
// console.log(carInstance);
