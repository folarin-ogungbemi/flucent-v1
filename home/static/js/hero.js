const socials = {
    linkedin:'https://www.linkedin.com/in/folarin-ogungbemi/',
    github:'https://github.com/folarin-ogungbemi',
    twitter:'https://twitter.com/ftogungbemi'}

// hero social links
let heroSocialLinks = document.getElementsByClassName('hero-social-links')[0];
// contact social links
let contactSocialLinks = document.getElementsByClassName('contact')[0].children[0];

const socialLinks = Object.entries(socials);
let socialList = 
    `<ul class="list-unstyled social-icons">`
    for (let link of socialLinks){
        let items =
        `<li class="social-icon">
            <a 
            href="${link[1]}"
            target="_blank"
            rel="noopener"
            aria-label="visit folarin's ${link[0]} page(open in a new tab)"
            ><i class="fa-brands fa-${link[0]}"></i></a>
        </li>`;
        socialList += items;
    }
    socialList += `</ul>`;
    heroSocialLinks.innerHTML += socialList;
    contactSocialLinks.innerHTML += socialList;

const parArray = ["I communicate efficiently with the web majorly through Javascript and Python to design and build aesthetic websites that exhibits an amazing digital experience."]
const typedTextSpan = document.querySelector('.typed-text');
const heroSpan = `<span class="hero-text">I communicate efficiently with the web majorly through <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" class="underline-hover-effect">Javascript</a> and <a href="https://www.python.org" class="underline-hover-effect">Python</a> to design and build aesthetic websites that exhibits an amazing digital experience.</span>`;
const cursorSpan = document.querySelector('.cursor');
const heroSpanFunc = () =>{
    typedTextSpan.innerHTML = heroSpan;
}

let parArrayIndex = 0;
let charIndex = 0;

function type(){
    if (charIndex < parArray[parArrayIndex].length){
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += parArray[parArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
    else{
        setTimeout(heroSpanFunc, 1000);
        cursorSpan.classList.remove('cursor');
    }
}

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(type, 2000)
})
