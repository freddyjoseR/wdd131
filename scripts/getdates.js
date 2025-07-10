// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the date the document was last modified
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified; 