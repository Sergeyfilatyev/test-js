// //Object

// const playlist = {
//   name: 'My playlist',
//   rating: 4,
//   tracks: ['track1', 'track2', 'track3'],
//   chahgeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
// };
// playlist.chahgeName('New name');
// playlist.addTrack('New track');
// console.log(playlist);
// const propertyName = 'tracks';

// console.log(playlist.name);
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);
// console.log(playlist['tracks']);
// console.log(playlist.tracks);

// const name = 'mango';
// const email = 'mango@mail.com';
// const abc = {
//   name,
//   email,
// };
// console.log(abc);

// const inputName = 'color';
// const inputValue = 'tomato';
// const color = {
//   [inputName]: inputValue,
// };
// color.size = 37;
// console.log(color);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//   totalFeedback += value;
// }
// console.log(totalFeedback);

// const friends = [
//   { name: 'Ivan', age: 18 },
//   { name: 'Petr', age: 21 },
//   { name: 'Anna', age: 23 },
//   { name: 'Sasha', age: 25 },
// ];
// console.log(friends);
// // for (const friend of friends) {
// //   friend.national = 'ukr';
// //   console.log(friend);
// // }
// function findName(allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.name === name) {
//       console.log(friend.name);
//       return 'OK';
//     }
//   }
// }

// console.log(findName(friends, 'Ivan'));
//
//
// const numbers = [
//   1000,
//   ...[1, 2, 3],
//   5000,
//   ...[4, 5, 6],
//   7000,
//   ...[7, 8, 9],
//   9000,
// ];
// console.log(numbers);
// //

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));
// //

// const a = { x: 1, y: 2 };
// const b = { x: 3, z: 2 };
// const c = Object.assign({ z: 3 }, a, b);
// const c = { z: 3, ...a, ...b };
// console.log(a, b, c);

//
// const playlist = {
//   name: 'My playlist',
//   track: ['number1', 'number2', 'number3'],
//   rating: 3,
//   stats: {
//     a: 1,
//     b: 12,
//     c: 13,
//   },
// };

// const {
//   name,
//   track,
//   rating: rat,
//   count = 55,
//   stats,
//   stats: { a, b, c },
// } = playlist;

// console.log(name, track, rat, count, stats, a, b, c);
// const rgb = [255, 120, 0];
// const [red, green, blue] = rgb;

// console.log(red, blue, green);
// const authors = {
//   kiwi: 4,
//   poly: 3,
//   mango: 2,
//   apple: 7,
// };

// const entries = Object.entries(authors);
// console.log(entries);

// // for (const entry of entries) {
// //   const [name, rating] = entry;
// //   console.log(entry);
// //   console.log(name, rating);
// // }
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }
//

// const profile = {
//   name: 'Tyudhj odofuidf',
//   tag: 'uyfiuy',
//   location: 'OIUIU hjhjh k jhjkjhj',
//   avatar: 'jfjfjfjjfj',
//   stats: {
//     followers: 393,
//     likes: 33,
//   },
// };
// const { name, tag, ...other } = profile;
// console.log(name, tag);
// console.log(other);
//

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, likes },
//   } = userProfile;
//   console.log(name, tag, location);
// };
// const profile = {
//   name: 'Tyron sed',
//   tag: 'tyyuu',
//   location: 'UUUUiiiii i o o oooo',
//   avatar: 'uyriirueyreuryie.com',
//   stats: {
//     followers: 3777,
//     likes: 22,
//   },
// };
// console.log(showProfileInfo(profile));

//
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];
//       console.log(item);
//       if (productName === item.name) {
//         console.log('Нашли такой продукт', productName);
//         console.log(i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price } of items) {
//       total += price;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'banana', price: 80 });
// cart.add({ name: 'mango', price: 60 });
// console.table(cart.getItems());
// cart.remove('banana');
// console.log(cart.countTotalPrice());
// cart.clear();
// console.log(cart.getItems());
