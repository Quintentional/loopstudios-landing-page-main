const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const closeButton = document.getElementById('close');

hamburger.addEventListener('click', ()=> {
    hamburger.style.display= "none";
    mobileMenu.style.display= "flex";
})

closeButton.addEventListener('click', ()=> {
    mobileMenu.style.display= "none";
    hamburger.style.display= "block";
})


