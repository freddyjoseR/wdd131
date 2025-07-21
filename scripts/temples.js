// Current date
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Modification date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const header = document.querySelector("header");
const menuButton = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  header.classList.toggle("show");
});

// Optional: close menu when click a link
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

