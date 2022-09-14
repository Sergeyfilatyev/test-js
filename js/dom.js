// const navEl = document.querySelector('.counter');
// console.log(navEl);
// const navElems = navEl.querySelectorAll('button');
// console.log(navElems);

// const magicBtn = document.querySelector('.btn-magic');
// console.log(magicBtn);
// const imgEl = document.querySelector('.img-change');
// magicBtn.addEventListener('click', () => {
//   imgEl.src =
//     'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg';
// });

// console.log(magicBtn.textContent);
// console.log(imgEl.src);
// console.log(imgEl.getAttribute('src'));

// const actions = document.querySelectorAll('.js-btn');
// console.log(actions[0].dataset.action);
// magicBtn.addEventListener('click', () => {
//   const inputM = document.querySelector('.js-input');
//   console.log(inputM.value);
//   inputM.value = 'pppppppppppppppppp';
// });
// const aB = event => {
//   console.log(event.currentTarget);
// };
// const btn = document.querySelector('.btn-magic');
// btn.addEventListener('click', aB);

// document.addEventListener('keydown', event =>
//   console.log(event.key, event.code)
// );
// const body = document.querySelector('body');
// body.style.backgroundColor = ' #849264';

// DOM EVENT PROPAGANDATION
// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   descendant: document.querySelector('#descendant'),
// };
// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.descendant.addEventListener('click', onDescendantClick);
// function onParentClick(event) {
//   console.log('onParentClick->event.target', event.target);
//   console.log('onParentClick->event.currentTarget', event.currentTarget);
// }
// function onChildClick(event) {
//   console.log('onChildClick->event.target', event.target);
//   console.log('onChildClick->event.currentTarget', event.currentTarget);
// }
// function onDescendantClick(event) {
//   console.log('onDescendantClick->event.target', event.target);
//   console.log('onDescendantClick->event.currentTarget', event.currentTarget);
// }

// const box = document.querySelector('.js-box');
// box.addEventListener('click', onClick);
// function onClick(event) {
//   if (event.target.nodeName === 'BUTTON') console.log(event.target.textContent);
// }
// const addBtn = document.querySelector('.add-btn');
// let labelCounter = 1;
// addBtn.addEventListener('click', onAddBtnClick);
// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Button ${labelCounter}`;
//   box.appendChild(btn);
//   btn.type = 'button';
//   labelCounter += 1;
// }

// const tagsContainer = document.querySelector('.tags');
// tagsContainer.style.backgroundColor = '#cde7e7';
// const selectedSet = new Set();
// // selectedSet.add(9);
// // selectedSet.add(9);
// // selectedSet.add({ a: 1 });
// // selectedSet.add({ a: 1 });

// tagsContainer.addEventListener('click', onTagsContainerClick);
// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }
//   const activeBtn = event.target;
//   console.log(activeBtn.classList.contains('tags__btn--active'));
//   activeBtn.classList.add('tags__btn--active');
//   console.log(activeBtn.textContent);
//   //   event.currentTarget.classList.add('ggg');
//   //   const ggg = document.querySelector('.ggg');
//   //   ggg.style.backgroundColor = 'red';
//   //   console.log(event.currentTarget);
//   selectedSet.add(activeBtn.dataset.value);
//   console.log(selectedSet);
// }
