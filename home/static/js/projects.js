const projects = [
    {
        name:"EmpowerEd",
        description: "EmpowerEd is an educational platform developed with the aim to provide education resources to underprivileged children. The application has a range of features to make learning interactive, accessible and engaging for students while also allowing students to connect with mentors, and providing the avenue for parents to communicate conveniently with teachers. In summary, the Website aim to achieve the goal of creating an education enabled environment for students.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1678281658/homepage_mockup_hesaqx.jpg",
        github:"https://github.com/folarin-ogungbemi/EmpowerEd",
        url:"https://team4-empowered.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Django", "Python", "postgreSQL", "Typescript", "React", "Google Cloud", "Git", "Agile", "Heroku"]
    },
    {
        name:"Gosip Bookstore",
        description: "Gosip Bookstore demonstrates the functionalities of an E-commerce website specifically with a B2C(Business to Customer) relationship. Buyers can view a list of books within the Bookstore, select an individual book from the list to view its details, choose to add the book to their wishlist for later purchase or decide to add the book to their shopping cart at a certain quantity from where they can proceed to checkout the Item(s) using a secure payment system Stripe.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1678281803/mockup_qqz2bu.jpg",
        github:"https://github.com/folarin-ogungbemi/Gosip-Bookstore",
        url:"https://flo-gosip.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Django", "Python", "postgreSQL", "Stripe", "Google Cloud", "Git", "Agile", "Heroku"]
    },
    {
        name:"Yabash",
        description: "Yabash is a restaurant application created majorly with the python Django functionality. The restaurant can take orders from a user and store the booking details in the user's booking records for later access. This booking(s) can be assessed, updated or cancelled as seen fit by the user.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288665/yabash-image_rz99ii.png",
        github:"https://github.com/folarin-ogungbemi/Yabash-GmbH",
        url:"https://flo-yabash.herokuapp.com/",
        technology:["HTML", "CSS", "Bootstrap", "Javascript", "Google Cloud", "Python", "Django", "postgreSQL", "Git", "Agile", "Heroku"]
    },
    {
        name:"Kologram",
        description: "Kologram is a simple project tracker built with Python in connection with google sheets API to keep track of users' interested financial projects and store user data in google sheets.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288664/kologram_jnotgm.jpg",
        github:"https://github.com/folarin-ogungbemi/kologram",
        url:"https://flo-kologram.herokuapp.com/",
        technology:["Python", "Google Cloud", "Heroku", 'Git']
    },
    {
        name:"Twain Land",
        description: "Twain-land introduces the famous concentration game that both young and old enjoy playing. However, twain-land takes a little tweak by tending towards incorporating a flash card for learning about different countries in the world and pairing them with their corresponding flag colours.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288664/twain-land-image_thajte.jpg",
        github:"https://github.com/folarin-ogungbemi/twain-land",
        url:"https://folarin-ogungbemi.github.io/twain-land/",
        technology:["HTML", "CSS", "Javascript", 'Git']
    }
]

const projectName = projects.map(project => project.name);
let projectList = document.getElementsByClassName('projects')[0];
for (let name of projectName){
    let project = `
    <ul class="list-unstyled project">
       <li class="project-btn">${name}</li>
    </ul>`
    projectList.innerHTML += project;
}

let projectDisplay = document.getElementsByClassName('project-display')[0];
const projectInfo = projects.map(project => {
    let projectView = 
    `<div class="col-12 col-md-8 project-content mx-auto mt-3">
        <div class="project" id="${project.name}">
            <div class="project-caption h-100 w-100">
                <div class="project-caption-content">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-between">
                            <a href="${project.github}"
                            target="_blank"
                            rel="noopener"
                            aria-label="visit folarin's github page(open in a new tab)"
                            ><i class="fa-brands fa-github-alt"></i></a>
                            <a href="${project.url}"
                            target="_blank"
                            rel="noopener"
                            aria-label="visit project's page(open in a new tab)"
                            ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-2">
                            <h4 class="capitalize project-name">${project.name}</h4>
                            <p class="small">${project.description}</p>`;
                                let projectTechList = 
                                `<ul class="language-box">`
                                for (let item of project.technology){
                                    let language = 
                                    `<li class="language me-2">${item}</li>`;
                                    projectTechList += language;
                                }
                                projectTechList += `</ul>`
                                projectView += projectTechList;
                            projectView += `
                        </div>
                    </div> 
                </div>
            </div>
            <img class="img-fluid project-img" src="${project.image}" alt="project mockup" />
        </div>
    </div>`;

    projectDisplay.innerHTML += projectView;
});                        


document.addEventListener('DOMContentLoaded', () =>{
    const projectBtn = document.querySelectorAll('.project-btn');
    const projectContent = document.querySelectorAll('.project-content');
    projectBtn.forEach((project, item) => {
        project.addEventListener('click', () =>{

            // toggle project button
            projectBtn.forEach(project => project.classList.remove('active'));
            project.classList.add('active');

            // toggle project content to display
            projectContent.forEach(content => content.classList.remove('active'));
            projectContent[item].classList.add('active');
        })
    });
    projectBtn[0].classList.add('active');
    projectContent[0].classList.add('active');
})

const projectNamer = document.querySelectorAll('.skill');
const projectSkill = document.getElementsByClassName('project-skill')[0];
projectNamer.forEach(skill=>{
    skill.addEventListener('click', ()=>{
        let projectSkillsText = `<span class="mb-1 text-grab">Projects I have built with <strong>${skill.innerHTML}</strong></span>`;
        let projectSkills = `<ul class="skill-info list-unstyled">`;
        for (let project of projects){
            if (project.technology.includes(skill.innerHTML)){
                projectList = ` <li class="project-tech">${project.name}</li>`
                projectSkills += projectList;
            }
        }
        projectSkills += `</ul>`
        projectSkill.innerHTML += projectSkillsText;
        projectSkill.innerHTML += projectSkills;
        
        // projectSkill Information Display
        projectSkill.classList.remove('active');
        projectSkill.classList.add('active');
        setTimeout(()=>{
            projectSkill.classList.remove('active');
        },200000)
    });
})
