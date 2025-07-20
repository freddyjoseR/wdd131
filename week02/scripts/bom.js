// Select Element from DOM
const input = document.querySelector('#favchap');   // Text field
const button = document.querySelector('button');    // Button
const list = document.querySelector('#list');       // list <ul>

// const li = document.createElement('li');
// const deleteButton = document.createElement('button')

// Add Events Listener to Button
button.addEventListener('click', function (event) {
    event.preventDefault(); // Avoid refresh the page
    const value = input.value.trim();

    if (value === '') {
        alert("Please enter your favorite chapter")
        input.focus(); // Find Out!!!
        return;
    } 

    const li = document.createElement('li');
    li.textContent = value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';        // Delete botton text
    deleteButton.style.marginLeft = '10px'; // optional, space

    li.appendChild(deleteButton); // put the button inside of the li
    list.appendChild(li);         // add the li to the list

    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // deletes the complete <li> 
    })

    input.value = '';   // clear field
    input.focus();      // Return focus
});

