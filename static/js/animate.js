// PAGE LOADING EFFECT
const fadeOut = 2000;
const hide = 4000;
const pageDelay = 4100;
const flucent = document.querySelector('.flucent');
const developer = document.querySelector('.developer');

let MainPageDelay = document.querySelectorAll('.page-load');
MainPageDelay.forEach(page => {
    setTimeout(() => {
        page.classList.add('display');
}, pageDelay);
})

const preLoad = document.querySelector('.preload');
preLoad.classList.add('start');
document.body.style.overflow = 'hidden';

setTimeout(() => {
    flucent.classList.add("fade_out");
    developer.classList.add("fade_out");
}, fadeOut);
setTimeout(() => {
    preLoad.classList.remove('start');
    preLoad.classList.add("end");
    document.body.style.overflow = 'scroll';
}, hide);

// SCROLLING EFFECT

// let options = {
//     root: null, // default is null
//     rootMargin: '50px', // margin from the viewport
//     threshold: 0.5, // by default is 0
//   };

// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });
// const animatePage = document.querySelectorAll('.hidden');
// animatePage.forEach((el) => observer.observe(el));

// const animatePage = document.querySelectorAll('.page');
// console.log(animatePage);

// let callback = (entries) =>{
//     entries.forEach((entry) => {
//         console.log(entries);
//         if (entry.isIntersecting){
//             const section = entry.target;
//             section.classList.add('show');
//             observer.unobserve(section);
//         }
//     });
// }
// let observer = new IntersectionObserver(callback);
// animatePage.forEach((page) => observer.observe(page));

// observer = new IntersectionObserver((entries) => entries.forEach(({ target: { classList } }) => classList.add("show")), {threshold:0.25});
// animatePage.forEach((page) => observer.observe(page));



