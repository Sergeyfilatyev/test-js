// // Switch

const stars = 3;
let price;

// if (stars === 1 || stars === 2) {
// 	price = 20;
// } else if (stars === 3 || stars === 4) {
// 	price = 30;
// } else if (stars === 5) {
// 	price = 100;
// } else {
// 	console.log("Такого количества звезд нет");
// }

switch (stars) {
	case 1:
	case 2:
		price = 20;
		break;

	case 3:
	case 4:
		price = 50;
		break;
	case 5:
		price = 100;
		break;
	default:
		console.log("Такого количества звезд нет");
}

console.log(price);
