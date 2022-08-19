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
