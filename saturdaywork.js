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
