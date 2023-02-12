const skills = [
    'HTML', 'CSS', 'Javascript', 'Python', 'Stripe', 'Google Cloud',
    'Bootstrap', 'Django', 'postgreSQL', 'Heroku', 'Git', 'Agile']

let technicalSkills = document.getElementsByClassName('technical-skills')[0];
document.addEventListener('DOMContentLoaded', ()=>{
    const aboutTextBody = document.getElementsByClassName('about-content')[0].getElementsByTagName('p');
    for (let p of aboutTextBody){
        p.className = "about-text";
    }
});

let skillBody = `<div class="list-unstyled skill-body">`
for (let skill of skills){
    let skillItem =
    `<a href="#projects" class="skill">${skill}</a>`
    skillBody += skillItem;
}
skillBody +=`</div>`
    technicalSkills.innerHTML += skillBody;
