const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const xIcon = document.querySelector('.xmark');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.remove('hamburger');
  navMenu.classList.add('active');
  xIcon.classList.add('nav-open');
});

xIcon.addEventListener('click', () => {
  xIcon.classList.remove('nav-open');
  navMenu.classList.remove('active');
  hamburger.classList.add('hamburger');
});

navLinks.forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.remove('active');
  xIcon.classList.remove('nav-open');
  hamburger.classList.add('hamburger');
}));

const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.getElementById('error-msg');

const fullName = document.querySelector('#name');
const txt = document.querySelector('textarea');

form.addEventListener('submit', (e) => {
  const val = email.value;
  const store = {};
  
  if (val !== val.toLowerCase()) {
    error.classList.add('incorrect');
    e.preventDefault();
  } else { 
    error.classList.remove('incorrect');
    form.submit();
  }
});
