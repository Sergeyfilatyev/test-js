// function friend(friends) {
//   //your code here

//   let result = [];
//   for (let i = 0; i < friends.length; i += 1) {
//     if (friends[i].length === 4) {
//       result.push(friends[i]);
//     }
//   }
//   return result;
// }

// console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));

// function toCamelCase(str) {
//   if (str.includes('-')) {
//     const arrayWords = str.split('-');

//     const newArray = arrayWords.map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     );
//     const result = newArray.join('');
//     return result;
//   } else if (str.includes('_')) {
//     const arrayWords = str.split('_');

//     const newArray = arrayWords.map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     );
//     const result = newArray.join('');
//     return result;
//   }
//   return '';
// }
// console.log(toCamelCase('the-stealth-warrior'));
// console.log(toCamelCase('The_stealth_warrior'));
// console.log(toCamelCase('Thestealthwarrior'));
//

// function reverseWords(str) {
//   const strArray = str.split(' ');
//   const newStr = [];
//   for (const elem of strArray) {
//     newStr.push(elem.split('').reverse().join(''));
//   }

//   return newStr.join(' ');
// }
// console.log(reverseWords('This is an example!'));

// function nbDig(n, d) {
//   const arrayNumbers = [];
//   for (let k = 0; k <= n; k += 1) {
//     console.log(k ** 2);
//     arrayNumbers.push(k ** 2);
//   }
//   console.log(arrayNumbers);
//   console.log(arrayNumbers.join('').split(''));
//   const newArrayNumbers = arrayNumbers
//     .join('')
//     .split('')
//     .filter(elem => elem == d);
//   console.log(newArrayNumbers);
//   return newArrayNumbers.length;
// }

// console.log(nbDig(25, 1));

//

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     return s[s.length / 2 - 1].concat(s[s.length / 2]);
//   } else return s[Math.round(s.length / 2 - 1)];
// }
// console.log(getMiddle('testq'));

//

// function sortArray(array) {
//   const newArray = [];
// }
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// console.log(sortArray([7, 1]));

// function partsSums(ls) {
//   //   let newLs = [0];
//   //   let totalLs = 0;
//   //   for (const elem of ls) {
//   //     totalLs += elem;

//   //     newLs.push(totalLs);
//   //     newLs.sort((a, b) => b - a);
//   //   }
//   //   return newLs;
//   // }
// //
// //   return newArray;
// // }
// // console.log(
// //   partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
// // );

// // function partsSums(ls) {
// //   let arr = [0];
// //   ls.reverse().forEach(x => arr.push(arr[arr.length - 1] + x));
// //   return arr.reverse();
// // }
// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((p, c) => p + c, 0);
//   return ls.map(v => (sum = sum - v));
// }
// console.log(
//   partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
// );

// function stringToArray(string) {
//   const arr = string.split(' ');
//   return arr;
// }
// console.log(stringToArray('I love arrays they are my favorite'));

// function toWeirdCase(string) {
//   const newString = string.split(' ').map((x, i) => {
//     x.split('').map((y, i) => {
//       if (i % 2 === 0) {
//         y.toLowerCase();
//       } else y.toUpperCase();
//     });
//   });
//   return newString;
// }
// // console.log(toWeirdCase('String'));
// console.log(toWeirdCase('Weird string case'));
// console.log(toWeirdCase('String'));

// //
// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

//
// function firstNonRepeatingLetter(s) {
//   const arr = s.toLowerCase().split('');

//   for (let i = 0; i < arr.length; i += 1) {
//     const firstIndex = arr.indexOf(arr[i]);
//     const lastIndex = arr.lastIndexOf(arr[i]);
//     if (firstIndex === lastIndex) {
//       return arr[i];
//     }
//   }
//   return '';
// }
// console.log(firstNonRepeatingLetter('Sisiei'));
