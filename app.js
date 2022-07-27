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

const showItemInfo = [
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj2.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj2.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
 
];
