const projects = [
    {
        name:"Gosip Bookstore",
        description: "Gosip Bookstore demonstrates the functionalities of an E-commerce website specifically with a B2C(Business to Customer) relationship. Buyers can view a list of books within the Bookstore, select an individual book from the list to view its details, choose to add the book to their wishlist for later purchase or decide to add the book to their shopping cart at a certain quantity from where they can proceed to checkout the Item(s) using a secure payment system Stripe.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288665/gosip-bookstore-image_rgw5vs.png",
        github:"https://github.com/folarin-ogungbemi/Gosip-Bookstore",
        url:"https://flo-gosip.herokuapp.com/",
        technology:["HTML", "CSS", "Javascript", "Django", "Swipe"]
    },
    {
        name:"Yabash",
        description: "Yabash is a restaurant application created majorly with the python Django functionality. The restaurant can take orders from a user and store the booking details in the user's booking records for later access. This booking(s) can be assessed, updated or cancelled as seen fit by the user.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288665/yabash-image_rz99ii.png",
        github:"https://github.com/folarin-ogungbemi/Yabash-GmbH",
        url:"https://flo-yabash.herokuapp.com/",
        technology:["HTML", "CSS", "Javascript", "Django"]
    },
    {
        name:"Kologram",
        description: "Kologram is a simple project tracker built with Python in connection with google sheets API to keep track of users' interested financial projects and store user data in google sheets.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288664/kologram_jnotgm.jpg",
        github:"https://github.com/folarin-ogungbemi/kologram",
        url:"https://flo-kologram.herokuapp.com/",
        technology:["HTML", "CSS", "Python"]
    },
    {
        name:"Twain Land",
        description: "Twain-land introduces the famous concentration game that both young and old enjoy playing. However, twain-land takes a little tweak by tending towards incorporating a flash card for learning about different countries in the world and pairing them with their corresponding flag colours.",
        image:"https://res.cloudinary.com/dzdyzl4r5/image/upload/v1673288664/twain-land-image_thajte.jpg",
        github:"https://github.com/folarin-ogungbemi/twain-land",
        url:"https://folarin-ogungbemi.github.io/twain-land/",
        technology:["HTML", "CSS", "Javascript"]
    }
]

const projectName = projects.map(project => project.name);
let projectList = document.getElementsByClassName('projects')[0];
for (let name of projectName){
    let project = `
    <ul class="list-unstyled project">
       <li class="project-btn"><a href="/#${name}">${name}</a></li>
    </ul>`
    projectList.innerHTML += project;
}

let projectDisplay = document.getElementsByClassName('project-display')[0];
const projectInfo = projects.map(project => {
    let projectView = 
    `<div class="project" id="${project.name}">
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
                            `<ul class="d-flex justify-content-start list-unstyled">`
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
        <img class="img-fluid" src="${project.image}" alt="project mockup" />
    </div>`;

    projectDisplay.innerHTML += projectView;
});                        
    