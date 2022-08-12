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
