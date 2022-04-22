"use strict";
// document.addEventListener('DOMContentLoaded', () => {

//   const onScrollHeader = () => {

//     const header = document.querySelector('.header');

//     let prevScroll = window.pageYOffset;

//     let currentScroll;
//     console.log("В начале" + prevScroll)
//     window.addEventListener('scroll', () => {
//       currentScroll = window.pageYOffset;
//       const headerHidden = () => header.classList.contains('header_hidden');

//       console.log("В конце" + currentScroll)
//       if (currentScroll > prevScroll && !headerHidden()) {
//         header.classList.add('header_hidden');
//       }
//       if (currentScroll < prevScroll && headerHidden()) {
//         header.classList.remove('header_hidden');
//       }

//     })
//   }

//   onScrollHeader()
// });
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.add('header_hidden');

	} else {

    header.classList.remove('header_hidden');
	}

	if (scrollDistance === 0) {
		header.classList.remove('header_hidden');
	}

	lastScrollTop = scrollDistance;
});
