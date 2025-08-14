// Select Element from DOM
const input = document.querySelector('#favchap');   // Text field
const button = document.querySelector('button');    // Button
const list = document.querySelector('#list');       // list <ul>

// Load array from localStorage or start empty
let chaptersArray = getChapterList() || []; 

// Display any existing chapters
chaptersArray.forEach(chapter => displayList(chapter));

// Button click event
button.addEventListener('click', function (event) {
    event.preventDefault(); // Avoid refresh the page
    
    const value = input.value.trim();
    
    if (value === '') {
        alert("Please enter your favorite chapter")
        input.focus(); // Find Out!!!
        return;
    } 

    displayList(value);                 // Add to DOM
    chaptersArray.push(value);          // Add to array
    setChapterList();                   // Save to localSotrage

    input.value = '';                   // Clear input
    input.focus();
});

// Enter key event input
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
});

// Display list function
function displayList(item) {
    
    const li = document.createElement('li');
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';        // Delete botton text
    deleteButton.style.marginLeft = '10px'; // optional, space

    // deleteEvent

    deleteButton.addEventListener('click', function () {
        deleteChapter(item + '❌'); // pass with ❌ so we can slice it
        list.removeChild(li);
    })


    li.appendChild(deleteButton); // put the button inside of the li
    list.appendChild(li);         // add the li to the list
}

// Save array to localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Get array from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

// Delete Chapter from array & update storage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove ❌
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
    