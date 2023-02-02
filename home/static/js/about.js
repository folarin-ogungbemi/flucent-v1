const skills = [
    'HTML', 'CSS', 'Javascript', 'Python', 'Materialize', 'Stripe', 'Google Cloud',
    'Bootstrap', 'Flask', 'Django', 'postgreSQL', 'Heroku', 'Git', 'Agile']

let technicalSkills = document.getElementsByTagName('section')[2]

for (let skill of skills){
    let skillHead = `
    <ul class="list-unstyled skill-list">
       <li class="skill-btn"><a href="#contact">${skill}</a></li>
    </ul>`
    technicalSkills.innerHTML += skillHead;
}