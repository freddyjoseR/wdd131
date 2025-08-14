// Current date
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Modification date
document.getElementById("lastModified").textContent = document.lastModified;

let count = localStorage.getItem("reviewCount");
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;