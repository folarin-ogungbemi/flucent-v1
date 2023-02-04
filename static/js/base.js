// Allow DOM to load first
document.addEventListener('DOMContentLoaded', () => {
    let topNav = document.getElementsByTagName('nav')[0] ;
    topNav.children[1].appendChild(navlistEl);
    topNav.children[1].appendChild(hamburgerBtn);
    topNav.children[1].appendChild(mobileNavDivEl1);

    // home link button
    const homeBtn1 = document.getElementsByTagName('li')[0];
    const homeBtn2 = document.getElementsByTagName('li')[5];
    homeBtn1.style.color = "#ED5959";
    homeBtn2.style.color = "#ED5959";

    // resume button
    const resumeBtn1 = document.getElementsByTagName('li')[4];
    const resumeBtn2 = document.getElementsByTagName('li')[9];
    resumeBtn1.className = 'action-btn';
    resumeBtn2.className = 'action-btn';
});

// create dictionary to be iterated on
const navDict = {
    Home: "/",
    About: "/#about",
    Projects: "/#projects",
    Contact: "/#contact",
    Resume: "#",
}

// create hamburger btn element
const hamburgerBtn = document.createElement('button');
const hamburgerIcon = document.createElement('div');
hamburgerBtn.appendChild(hamburgerIcon);
hamburgerIcon.className = 'hamburger-icon';
hamburgerBtn.className = 'hamburger-btn d-block d-md-none ms-auto';

// create nav list element
let navlistEl = document.createElement('ul');
navlistEl.className = 'd-none d-md-flex list-unstyled nav-list';

// create mobile-nav list element
let mobileNavDivEl1 = document.createElement('div');
let mobileNavDivEl2 = document.createElement('div');
let mobileNavlistEl = document.createElement('ul');
mobileNavDivEl1.appendChild(mobileNavDivEl2);
mobileNavDivEl2.appendChild(mobileNavlistEl);
mobileNavDivEl1.className = 'd-block d-md-none';
mobileNavlistEl.className = 'list-unstyled mobile-nav';

let navItems = Object.entries(navDict);
for (item of navItems) {
    let navList = `
    <li class="nav-item">
        <a href="${item[1]}"
        class="nav-link"
        >${item[0]}</a>
    </li>`
    navlistEl.innerHTML += navList;
    mobileNavlistEl.innerHTML += navList;
};

hamburgerBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('is-active');
    mobileNavDivEl1.classList.toggle('is-active');
    mobileNavDivEl2.classList.toggle('is-active');
})
