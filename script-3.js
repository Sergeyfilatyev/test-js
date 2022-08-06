// // Massiv
// const friends = ["Ivan", "Petr", "Ruslan", "Vladimir"];
// console.table(friends);
// friends[1] = "Tyzil";
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
// 	console.log(friends[i]);
// }
// for (const friend of friends) {
// 	console.log(friend);
// }

// const a = [23, 232, 45, 465, 787, 2, 3];
// let total = 0;
// for (let i = 0; i < a.length; i += 1) {
// 	console.log(a[i]);
// 	total += a[i];
// }
// console.log("Total", total);

// const b = [35, 36, 89, 46, 85, 66, 74, 23, 123, 88];
// let total = 0;
// for (let i = 0; i < b.length; i += 1) {
// 	if (b[i] % 2 !== 0) {
// 		console.log("ODD:", b[i]);
// 		continue;
// 	}
// 	console.log("NONE:", b[i]);
// 	total += b[i];
// }
// console.log(total);

// const logins = ["fgdkfduh", "ewriouirJJ", "Qwerty", "qwerty", "uytrr"];
// const loginToFind = "qwerty";
// let message = `Login ${loginToFind} no`;
// for (const login of logins) {
// 	if (login === loginToFind) {
// 		message = `Login ${loginToFind} yes`;
// 		break;
// 	}
// }
// const message = logins.includes(loginToFind)
// 	? `Login ${loginToFind} yes`
// 	: `Login ${loginToFind} no`;
// console.log(message);
// console.log(logins.includes(loginToFind));

// const numbers = [35, 36, 89, 46, 85, 66, 74, 23, 123, 88];
// let smallNumber = numbers[0];
// for (const number of numbers) {
// 	if (number < smallNumber) {
// 		smallNumber = number;
// 	}
// }
// console.log(smallNumber);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertString = '';
// console.log(letters);
// for (const letter of letters) {
//   console.log(letter);
//   // if (letter === letter.toUpperCase()) {
//   // 	invertString += letter.toLowerCase();
//   // } else {
//   // 	invertString += letter.toUpperCase();
//   // }
//   invertString +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
// }
// console.log(invertString);

// const array1 = [1, 6, 8, 2, 65, 7];
// const array2 = [4, 6, 5, 17, 63, 55];
// const array3 = [3, 61, 18, 3, 5, 8];
// const numbers = array1.concat(array2, array3);
// let total = 0;
// console.log(numbers);
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// const cards = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5', 'Card6'];
// const cardRemove = 'Card1';
// const index = cards.indexOf(cardRemove);
// console.log(index);
// cards.splice(index, 2);
// cards.splice(2, 0, 'ccccc');
// console.table(cards);
