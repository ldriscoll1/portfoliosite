//List of project objects that have a Title, description, image, and link
let projects = [
    {
        title: "PokemonDBProject",
        description: "This project is a fullstack website that uses mySql to store data about the most recent pokemon. Due to the lack of services online to allow for the search of pokemon, I decided to make this database to help pokemon fans to query for different pokemon. The database is hosted on a local server. For this project I learned a lot about MySQL and setting up the database, and also I learned a lot about to use streamlit a python based frontend for my website.",
        image: "pokemonProject.png",
        link: "https://github.com/ldriscoll1/PokemonDBProject"
    },
    {
        title: "Random Anime Selector",
        description: "This project is a website that allows the user to choose a random anime based on the genre they choose. The website uses the Jikan API to get the data about the anime. I learned a lot about how to use the Jikan API and how to use the data from the API to display the anime information. I also learned a lot about how to use the fetch API to get the data from the API. Furthermore, this was my first project in JavaScript, HTML, and CSS, so it helped give me a good foundation for these languages.",
        image: "animeProject.png",
        link: ""
    },
    {
        title: "Rock Paper Scissors Project",
        description: "This project is a website that allows the user to play rock paper scissors against the computer. The website uses the Math.random() function to generate a random number between 0 and 1. The number is then multiplied by 3 and rounded down to get a number between 0 and 2. The number is then used to get the computer's choice. I learned a lot about how to use the Math.random() function and how to use the switch statement in JavaScript.",
        image: "rockPaperProject.png",
        link: "https://github.com/ldriscoll1/RockPaperScissors"
    },
    {
        title: "My Portfolio Website",
        description: "This project is my portfolio website. I learned a lot about how to use HTML, CSS, and JavaScript to create a website, compared to my previous projects I focused heavily on presentation with HTML and CSS, with minimal JavaScript",
        image: "portfolioProject.png",
        link: "http://lukedriscoll.dev"
    }
];

let index = 0;
let project = projects[index];
//Change the title
document.getElementById("project_title").innerHTML = project.title;
//Change the description
document.getElementById("project_description").innerHTML = project.description;
//Change the image
document.querySelector(".Project_Preview").src = project.image;
//Change the link
document.getElementById("projectLink").href = project.link;

document.querySelector(".centered").classList.add("fade");

// document.querySelector(".centered").classList.remove("fade");
//Method for changing the projects
document.getElementById("Next_Button").addEventListener("click", () => {
    if (index === projects.length - 1) {
        console.log(1);
        index = -1;
    }
    index++;

    console.log(index);
    //Get the project
    let project = projects[index];
    document.querySelector(".centered").classList.remove("fade");
    void document.querySelector(".centered").offsetWidth;
    document.querySelector(".centered").classList.add("fade");
    //Change the title
    document.getElementById("project_title").innerHTML = project.title;
    //Change the description
    document.getElementById("project_description").innerHTML = project.description;
    //Change the image
    document.querySelector(".Project_Preview").src = project.image;
    //Change the link
    document.getElementById("projectLink").href = project.link;
});
document.getElementById("Prev_Button").addEventListener("click", () => {
    if (index === 0) {
        console.log(1);
        index = projects.length;
    }
    index--;
    
    //Add fade transition
    document.querySelector(".centered").classList.remove("fade");
    void document.querySelector(".centered").offsetWidth;
    document.querySelector(".centered").classList.add("fade");

    console.log(index);
    //Get the project
    let project = projects[index];
    //Change the title
    document.getElementById("project_title").innerHTML = project.title;
    //Change the description
    document.getElementById("project_description").innerHTML = project.description;
    //Change the image
    document.querySelector(".Project_Preview").src = project.image;
    //Change the link
    document.getElementById("projectLink").href = project.link;
        //Check if it is the last project

});
// Increment the project every 5 seconds in an interval
setInterval(() => {
    if (index === projects.length - 1) {
        console.log(1);
        index = -1;
    }
    index++;

    console.log(index);
    //Get the project
    let project = projects[index];

    //Add fade transition
    document.querySelector(".centered").classList.remove("fade");
    void document.querySelector(".centered").offsetWidth;
    document.querySelector(".centered").classList.add("fade");
    //Change the title
    document.getElementById("project_title").innerHTML = project.title;
    //Change the description
    document.getElementById("project_description").innerHTML = project.description;
    //Change the image
    document.querySelector(".Project_Preview").src = project.image;
    //Change the link
    document.getElementById("projectLink").href = project.link;
        //Check if it is the last project
}, 5000);