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
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },
    links: {
      liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
      liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git'
    }
    
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },
    links: {
      liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
      liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git'
    },
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
    liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    links: {
      liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
      liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
    },
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    links: {
      liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
      liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
    },
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/proj.png',
    desc: {
      card: "A daily selection of privately personalized reads; no accounts or sign-ups required. has  been the industry's standard",
      desktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      mobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    links: {
      liveVersion: 'https://davmba.github.io/My-Portfolio-DaveMba/',
      liveSource: 'https://github.com/davmba/My-Portfolio-DaveMba.git',
    },
  },
];
const itemCont = document.querySelector('proj_wrap');
function showCard() {
  showItemInfo.forEach((data) => {
    itemCont.innerHTML += `<div class="proj">
    <div class="proj_wrapp">
      <h3>${item.title}</h3>
      <p>${item.desc.card}</p>
      <div class="buttons">
        <span>html</span>
        <span>bootstrap</span>
        <span>Ruby</span>
      </div>
      <div class="see">
        <a class="btn" href="#">See Project</a>
      </div>
    </div>
  </div>`;
  });
}
showCard();
