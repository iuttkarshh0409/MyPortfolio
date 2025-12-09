// Typewriter Effect with Typing and Deleting
const texts = ["Java Developer", "MCA Student", "Backend Enthusiast", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

(function type() {
    currentText = texts[count];
    
    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.querySelector(".typewriter").textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        setTimeout(() => { isDeleting = true; }, pauseTime);
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
})();

// Hamburger Menu Toggle for Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Section fade-in on scroll
const sections = document.querySelectorAll(".section");
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
        entry.target.classList.toggle("hidden", !entry.isIntersecting);
    });
}, options);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});