let homeButton = document.getElementById('home-button');
let contactButton = document.getElementById('contact-button');
let projectButton = document.getElementById('projects-button');
let mainBodyText = document.getElementById('main-text')

function homeText() {
    mainBodyText.innerHTML = `<h2 class="heading">About Me</h2>
    <p class="about-me">I am currently studying full stack web development and have a goal of being able to one day make websites for video game companies. I have always loved playing video games throughout my life, whether that game made me angry, happy or sad. I find enjoyment in all of them especially when I get to enjoy them with the boys.
        <br>
        <br>
    That's not all though, some of my other favorite things to do are to go to fun places like amusement parks, Dave & Busters or Main Event. I also work out regularly and have made the gym a place where I can find peace of mind while enjoying a good muscle pump.
    </p>`
}

function contactText() {
    mainBodyText.innerHTML = `<h2 class="heading">How to contact me!</h2>
    <ul id="contact-list">
        <li>Email: Donovandevall@gmail.com</li>
        <li>Phone: 813-838-5238</li>
        <li>Based in Florida, USA</li>
    </ul>`
}

function projectText() {
    mainBodyText.innerHTML = `<h2 class="heading">Here are a few of my projects!</h2>
    <ul id="project-list">
        <li>
            <a href="https://donniedevall.github.io/chest-opener/">Fantasy Loot Chest Opener</a>
        </li>
    </ul>`
}

homeButton.onclick = homeText;
contactButton.onclick = contactText;
projectButton.onclick = projectText;