// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});