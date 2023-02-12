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