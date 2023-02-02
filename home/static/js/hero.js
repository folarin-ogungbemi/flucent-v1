document.addEventListener("DOMContentLoaded", ()=>{
    heroGrandChild.appendChild(heroSocialList);
})

socials = [
    {linkedin:'https://www.linkedin.com/in/folarin-ogungbemi/'},
    {github:'https://github.com/folarin-ogungbemi'},
    {twitter:'https://twitter.com/ftogungbemi'},
]

let heroContent = document.getElementsByClassName('hero-content')[0];
let heroChild = heroContent.children[0]
let heroGrandChild = heroChild.children[0];

// create hero social links Div element.
let heroSocialList = document.createElement('ul');
heroSocialList.className = "list-unstyled social-icons";

// insert social links in hero social links Div element.
for (let link of socials){
    for (let i in link){
        let socialLinks = `
        <li>
            <a 
            href="${link[i]}"
            target="_blank"
            class="social-icon"
            rel="noopener"
            aria-label="visit folarin's ${i} page(open in a new tab)"
            ><i class="fa-brands fa-${i}"></i></a>
        </li>
        `
        heroSocialList.innerHTML += socialLinks;
    }
}
