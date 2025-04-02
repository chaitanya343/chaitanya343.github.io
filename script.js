// Theme Toggle with Persistence
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});

// Smooth Scrolling
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing Animation
const typedText = "Namaste, I'm Chaitanya Patel!";
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.getElementById("typed-text").innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Modal Functions
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Form Validation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("form-feedback");

  if (name && email && message) {
    feedback.innerHTML = "Message Sent!";
    feedback.style.color = "green";
    document.getElementById("contact-form").reset();
  } else {
    feedback.innerHTML = "Please fill out all fields.";
    feedback.style.color = "red";
  }
}

// Debounced Scroll Progress Bar
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.onscroll = debounce(() => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
  document.getElementById("scroll-top").style.display = winScroll > 200 ? "block" : "none";
}, 10);

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Custom Cursor
// document.addEventListener('mousemove', (e) => {
//   const cursor = document.querySelector('body::after');
//   if (cursor) {
//     cursor.style.left = `${e.clientX}px`;
//     cursor.style.top = `${e.clientY}px`;
//   }
// });
