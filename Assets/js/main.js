const navEl = document.querySelector('.open-nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', ()=>{
    //navEl.classList.toggle("open-nav");
    navEl.classList.toggle("open")
    hamburgerEl.classList.toggle("hamburger--open");
})

navEl.addEventListener('click', ()=>{
    navEl.classList.style="display:block"
    hamburgerEl.classList.remove("hamburger");
});