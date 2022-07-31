// // Switch

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
// 	price = 20;
// } else if (stars === 3 || stars === 4) {
// 	price = 30;
// } else if (stars === 5) {
// 	price = 100;
// } else {
// 	console.log("Такого количества звезд нет");
// }

// switch (stars) {
// 	case 1:
// 	case 2:
// 		price = 20;
// 		break;

// 	case 3:
// 	case 4:
// 		price = 50;
// 		break;
// 	case 5:
// 		price = 100;
// 		break;
// 	default:
// 		console.log("Такого количества звезд нет");
// }

// console.log(price);

// const option = 4;
// let message;

// switch (option) {
// 	case 1:
// 		message = "Вы можете забрать посылку завтра с 12-00";
// 		break;
// 	case 2:
// 		message = "Курьер привезет вам посылку завтра после 19:00";
// 		break;
// 	case 3:
// 		message = "Почта будет отправлена в течении 2х дней";
// 		break;
// 	default:
// 		message = "Менеджер вам перезвонит";
// }
// console.log(message);

// Цикл for
// for(инициализация начальное значение; условие до какого выполняется цикл; на сколько изменяется)
// {тело цикла }

// for (let i = 9; i <= 100; i += 5) {
// 	console.log("Число", i);
// }

// const minSalary = 500;
// const maxSalary = 5000;
// const employers = 4;
// let totalSalary = 0;
// for (let i = 1; i <= 5; i += 1) {
// 	const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
// 	console.log(`Total salary employ ${i} - ${salary}`);
// 	totalSalary += salary;
// }
// console.log("Total", totalSalary);

const min = 0;
const max = 10;
let total = 0;

// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 === 0) {
// 		console.log("None:", i);
// 		total += i;
// 	} else {
// 		console.log("Odd:", i);
// 	}
// }
// console.log("total", total);

for (let i = min; i <= max; i += 1) {
	if (i % 2 !== 0) {
		console.log("Odd:", i);
		continue;
	}
	console.log("None:", i);
	total += i;
}
console.log("total", total);
