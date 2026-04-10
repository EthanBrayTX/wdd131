// 1. Setup Dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// 2. Animal Data
const animals = [
    { name: "Lion", image: "images/lion-thumb.jpg", description: "The 'King of Beasts' and the only social cat species.", link: "lion.html" },
    { name: "Leopard", image: "images/leopard-thumb.jpg", description: "An elusive and powerful climber known for its beautiful spots.", link: "leopard.html" },
    { name: "Rhino", image: "images/rhino-thumb.jpg", description: "Known for its prehistoric look and magnificent horns.", link: "rhino.html" },
    { name: "Elephant", image: "images/elephant-thumb.jpg", description: "The largest land mammal with incredible intelligence.", link: "elephant.html" },
    { name: "Cape Buffalo", image: "images/buffalo-thumb.jpg", description: "Often called 'The Black Death' due to its unpredictable nature.", link: "buffalo.html" }
];

// 3. Render Cards
const container = document.getElementById('animal-cards-container');
if (container) {
    animals.forEach(animal => {
        let card = document.createElement("section");
        card.className = "card";
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}" loading="lazy">
            <h3>${animal.name}</h3>
            <p>${animal.description}</p>
            <a href="${animal.link}" class="btn">View Details</a>
        `;
        container.appendChild(card);
    });
}

// 4. Hamburger Toggle
const menuButton = document.querySelector('#menu');
const navLinks = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// 5. LocalStorage
const welcomeEl = document.getElementById('welcome-message');
if (welcomeEl) {
    let visitCount = Number(localStorage.getItem('visit-count')) || 0;
    visitCount++;
    localStorage.setItem('visit-count', visitCount);
    welcomeEl.textContent = visitCount === 1 ? "Welcome to your first safari!" : `Welcome back! Savanna visit count: ${visitCount}`;
}