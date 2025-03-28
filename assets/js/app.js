const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')
const body = document.body
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navigation.classList.toggle('open')
    body.classList.toggle("no-scroll")
});

const modal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

// Pobranie wszystkich elementów portfolio
const portfolioItems = document.querySelectorAll(".portfolio-item .portfolio-picture");

const portfolioDetails = {
    "Data Managment CRUD App": {
        link: "#",
        description: "A CRUD application with data printing functionality, developed with React.js and Tailwind CSS."
    },
    "Guess the number game": {
        link: "https://damian080990.github.io/guess-a-number-game-js/",
        description: "A game in which the player tries to guess a randomly selected number within a defined range."
    },
    "Simple Landing Page": {
        link: "https://damian080990.github.io/real-estate-landing-page/",
        description: "A minimalistic landing page built with HTML/CSS."
    },
    "Sociala": {
        link: "https://project-sociala.netlify.app/",
        description: "A social media application inspired by Facebook/Instagram, featuring user post feeds. Developed using React.js."
    },
    "Simple Calculator": {
        link: "https://project-simple-react-calculator.netlify.app/",
        description: "React.js-based calculator application implementing core arithmetic operations."
    },
    "CV Template": {
        link: "https://damian080990.github.io/cv/",
        description: "Customizable resume template developed using HTML5, CSS3, and vanilla JavaScript."
    },
}

// Iteracja po wszystkich obrazkach i dodanie event listenera
portfolioItems.forEach(item => {
    item.addEventListener("click", function () {
        const title = this.querySelector(".description").innerText;
        const portfolioData = portfolioDetails[title] || { link: "#", description: "Brak opisu" }; // Tutaj wstaw odpowiednie linki do demo

        // Ustawienie wartości w modal
        modalTitle.innerText = title;
        modalDescription.innerText = portfolioData.description;
        modalLink.href = portfolioData.link;

        // Pokaż modal
        modal.style.display = "flex";
    });
});

// Zamknięcie modala po kliknięciu w "×"
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Zamknięcie modala po kliknięciu poza jego obszar
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

