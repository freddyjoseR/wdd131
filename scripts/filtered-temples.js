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
function closeMenu() {
  const header = document.querySelector("header");
  header.classList.remove("show");
}

document.querySelectorAll(".navigation a").forEach(function(link) {
  link.addEventListener("click", closeMenu);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-6083.jpg"  
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-60225.jpg"
  },
  {
     templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpg"
  },
];

const container = document.getElementById('templeContainer');

createTempleCard(temples);

document.querySelector("#alltemples").addEventListener("click", () => {
    createTempleCard(temples);
});

const oldTemplesLink = document.querySelector("#oldtemples");
const newTemplesLink = document.querySelector("#newtemples");
const largeTemplesLink = document.querySelector("#largetemples");
const smallTemplesLink = document.querySelector("#smalltemples");

oldTemplesLink.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  createTempleCard(oldTemples)
})
 
newTemplesLink.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  createTempleCard(newTemples);
})

largeTemplesLink.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
})

smallTemplesLink.addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
})

function createTempleCard(filteredTemples) {
  document.querySelector("#templeContainer").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("div");
    card.classList.add('temple-card');
    let name = document.createElement("h2");
    let templeLocation = document.createElement("p");
    let dedication = document.createElement("p");
    let fullArea = document.createElement("p");
    let image = document.createElement("img")

    name.textContent = temple.templeName;
    templeLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    fullArea.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400");
    image.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(templeLocation);
    card.appendChild(dedication);
    card.appendChild(fullArea);
    card.appendChild(image);

    container.appendChild(card);
  });
}