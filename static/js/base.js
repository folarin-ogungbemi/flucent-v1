// Allow DOM to load first
document.addEventListener('DOMContentLoaded', () => {
    let topNav = document.getElementsByTagName('nav')[0] ;
    topNav.children[1].appendChild(navlistEl);
});

const url = window.location.href;

// create dictionary to be iterated on
const navDict = {
    About: "#",
    Projects: "#",
    Contact: "#",
    Resume: "#",
}

// create target element
let navlistEl = document.createElement('ul');
navlistEl.className = 'list-unstyled d-flex justify-content-around';
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