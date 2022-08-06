// function getExtremeElements(array) {
// 	const newArray = [array[0], array[array.length - 1]];
// 	console.log(newArray);
// 	return newArray;
// }
// getExtremeElements([1, 2, 3, 4, 5]);

// function calculateEngravingPrice(message, pricePerWord) {
// 	const a = message.split(" ");
// 	let totalPrice = a.length * pricePerWord;
// 	console.log(totalPrice);
// 	return totalPrice;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// function slugify(title) {
//   // Change code below this line
//   //   const normilizedTitle = title.toLowerCase();
//   //   console.log(normilizedTitle);
//   //   const words = normilizedTitle.split(' ');
//   //   console.log(words);
//   //   const slug = words.join('-');
//   // Change code above this line
//   const slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug);
//   return slug;
// }
// slugify('Arrays for begginers');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   console.log(total);
// }
// calculateTotal(3);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// calculateTotalPrice([1, 1, 2, 4]);

// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   let longWorld = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longWorld.length) {
//       longWorld = array[i];
//     }
//   }
//   console.log(array);
//   console.log(longWorld);
//   return longWorld;
//   // Change code above this line
// }
// findLongestWord(
//   'ddjgjdfhgjhhkjhkjhkjhkjhkjhkjhkhkjhkhkjhk jhfjdkghdjkfh dkfjghdjf kdfgjghghghghghgh djfgh dkfgjjljkjklkjljlhhhhhh'
// );

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);

//   return numbers;
// }
// createArrayOfNumbers(4, 7);

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// filterArray([1, 7, 3, 4, 5], 3);

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit);
// }
// checkFruit('apple');

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }
// getCommonElements([1, 2, 4], [2, 4]);

// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function getEvenNumbers(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   console.log(array);
//   return array;
// }
// getEvenNumbers(2, 5);

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       console.log(array[i]);
//       return true;
//     }
//   }
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}
