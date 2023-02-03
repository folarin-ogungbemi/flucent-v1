const skills = [
    'HTML', 'CSS', 'Javascript', 'Python', 'Materialize', 'Stripe', 'Google Cloud',
    'Bootstrap', 'Flask', 'Django', 'postgreSQL', 'Heroku', 'Git', 'Agile']

let technicalSkills = document.getElementsByClassName('technical-skills')[0];
document.addEventListener('DOMContentLoaded', ()=>{
    const aboutTextBody = document.getElementsByClassName('about-content')[0].getElementsByTagName('p');
    for (let p of aboutTextBody){
        p.className = "about-text";
    }
});

for (let skill of skills){
    let skillHead = `
    <ul class="list-unstyled skill-list">
       <li class="skill-btn"><a href="#contact">${skill}</a></li>
    </ul>`
    technicalSkills.innerHTML += skillHead;
}

