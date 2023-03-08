// Allow DOM to load first
document.addEventListener('DOMContentLoaded', () => {

    // CREATING NAVLINKS DICTIONARY TO BE ITERATED ON
    const navDict = {
        Home: "/",
        About: "/#about",
        Projects: "/#projects",
        Contact: "/#contact",
        Résumé: "#",
    }

    // CREATING TOP NAVLIST ELEMENT
    const navlistEl = document.createElement('ul');
    navlistEl.className = 'd-none d-md-flex list-unstyled nav-list';

    // CREATING MOBILE NAVLIST ELEMENT
    const mobileNavDivEl1 = document.createElement('div');
    mobileNavDivEl1.className = 'd-block d-md-none';
    const mobileNavDivEl2 = document.createElement('div');
    mobileNavDivEl1.appendChild(mobileNavDivEl2);
    /* mobile nav DivElement content */
    const mobileNavlistEl = document.createElement('ul');
    mobileNavlistEl.className = 'list-unstyled mobile-nav';
    mobileNavDivEl2.appendChild(mobileNavlistEl);

    // LOOP NAV ITEMS INTO CREATED LIST ELEMENTS
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

    // CREATING HAMBURGER ELEMENT
    /* hamburger button element */
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-btn d-block d-md-none ms-auto';
    /* hamburger icon */
    const hamburgerIcon = document.createElement('div');
    hamburgerIcon.className = 'hamburger-icon';
    hamburgerBtn.appendChild(hamburgerIcon);

    // APPEND ELEMENTS TO NAVBAR
    const topNav = document.getElementsByTagName('nav')[0] ;
    topNav.children[1].appendChild(navlistEl);
    topNav.children[1].appendChild(hamburgerBtn);
    topNav.children[1].appendChild(mobileNavDivEl1);

    // STYLE NAVBAR RESUME BUTTON
    document.getElementsByTagName('li')[4].className = 'action-btn';
    document.getElementsByTagName('li')[9].className = 'action-btn';

    // ACTIVE LINK LISTENER SYSTEM
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', ()=>{
            navLinks.forEach(link => link.classList.remove('link-is-active'))
            link.classList.add('link-is-active');
        })
    });
    navLinks[0].classList.add('link-is-active');
    navLinks[5].classList.add('link-is-active');

    // NAVBAR DYNAMIC SYSTEM
    let topScroll = 0;
    const navBar = document.getElementsByTagName('header')[0];
    window.addEventListener('scroll', ()=>{
        let winScrolled = window.scrollY;
        winScrolled > topScroll ? navBar.style.top = "-12vh" : navBar.style.top = "0";
        topScroll = winScrolled;
        /* Add box shadow to navbar */
        (winScrolled === 0) && (topScroll === 0) ? navBar.style.boxShadow = "none" 
        : navBar.style.boxShadow ="0.5px 0.5px 30px 0.7px rgba(0, 0, 0, 0.6)";
    })

    // OFFCANVAS DYNAMIC SYSTEM
    const OffCanvasToggler = () =>{
        hamburgerIcon.classList.toggle('is-active');
        mobileNavDivEl1.classList.toggle('is-active');
        mobileNavDivEl2.classList.toggle('is-active');
        document.body.style.overflow = 'hidden';
    }
    hamburgerBtn.addEventListener('click', () => OffCanvasToggler());
    // mobileNavlistEl.querySelectorAll('.nav-item').forEach(nav => nav.onclick = OffCanvasToggler);
    mobileNavDivEl1.addEventListener('click', () => {
        document.body.style.overflow = 'scroll';
        mobileNavDivEl1.classList.remove('is-active')
        mobileNavDivEl2.classList.remove('is-active');
        hamburgerIcon.classList.remove('is-active');

    });
})
