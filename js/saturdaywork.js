// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// значение '1', то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// function seasons(num) {
//   let result;
//   switch (num) {
//     case '1':
//       result = 'Зима';
//       break;
//     case '2':
//       result = 'Весна';
//       break;
//     case '3':
//       result = 'Лето';
//       break;
//     case '4':
//       result = 'Осень';
//       break;
//     default:
//       result = 'Времени года не существует';
//   }
//   return result;
// }
// console.log(seasons('2'));

// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// function funk1() {
//   let num = 0;
//   while (num >= 0 && num <= 50) {
//     console.log(num);
//     num += 1;
//   }
//   //   return num;
// }
// funk1();
// // console.log(funk1());

// //Напишите функцию min(a, b), которая возвращает
// //меньшее из чисел a, b
// //нужно добавить проверку, что функция получает числа
// function min(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return 'Not a number';
//   }
//   if (a > b) {
//     return b;
//   }
//   return a;
// }
// console.log(min('a', 'k'));

// function calculateAverage(...args) {
//   let total = 0;
//   let count = 0;
//   console.log(args);
//   for (const arg of args) {
//     if (arg === Number(arg)) {
//       total += arg;
//       count += 1;
//     }
//   }
//   return total / count;
//   // console.log(total)
// }
// console.log(calculateAverage(1, 'k', 15, '11'));
//

// Напиши скрипт, который для объекта user,
// последовательно:
// 1 добавит поле mood со значением 'happy'
// 2 заменит hobby на 'skydiving'
// 3 заменит значение premium на false
// 4 выводит содержимое объекта users в фортмате
// ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
// console.log(Object.keys(user));
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

//
//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const totalSalary = salary => {
//   console.log(Object.values(salary));
//   let total = 0;
//   for (const a of Object.values(salary)) {
//     total += a;
//   }
//   return total;
// };
// console.log(totalSalary({}));

//
//Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client('Mango', 'mango@mail.com');
// client.login = 'Apple';
// client.email = 'apple@mail.com';
// console.dir(client);
