// Allow DOM to load first
document.addEventListener('DOMContentLoaded', () => {
    let topNav = document.getElementsByTagName('nav')[0] ;
    topNav.children[1].appendChild(navlistEl);
    topNav.children[1].appendChild(hamburgerBtn);
});

// create dictionary to be iterated on
const navDict = {
    About: "#",
    Projects: "#",
    Contact: "#",
    Resume: "#",
}

// create nav list element
let navlistEl = document.createElement('ul');
navlistEl.className = 'd-none d-md-flex list-unstyled justify-content-around';
let navItems = Object.entries(navDict);
for (item of navItems) {
    let navList = `
    <li class="nav-item">
        <a href="${item[1]}"
        class="nav-link"
        >${item[0]}</a>
    </li>`
    navlistEl.innerHTML += navList;
};

// create hamburger btn element
const hamburgerBtn = document.createElement('button');
const hamburgerIcon = document.createElement('div');
hamburgerBtn.appendChild(hamburgerIcon);
hamburgerIcon.className = 'hamburger-icon';
hamburgerBtn.className = 'hamburger-btn d-block d-md-none ms-auto';

hamburgerBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('is-active');
})