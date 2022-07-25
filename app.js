// OPEN AND CLOSE MENU
const sideMenu = document.getElementById('side-menu');
const navLinks = document.querySelectorAll('nav-link');

function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu
    .style.right = "-400px";
};

// CLOSE MENU ON LINK CLICK


navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('.nav');
    });
});


// $( document ).ready(function() {
//     $('.nav-list').click(function(){
//       $('.nav').removeClass('show');
//  });  
//   }); 