// Getting the current year
const currentYear = new Date().getFullYear();

// Setting the year in the copyright element
document.getElementById("Copyright-year").textContent = currentYear;

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

// Close the menu when a nav link is clicked and navigate to the section
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  };
});

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top > offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

// Stick navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle Icon and Navbar
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
