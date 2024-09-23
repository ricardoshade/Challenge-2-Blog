// TODO: Create a variable that selects the main element, and a variable that selects the back button element.
const main = document.querySelector('main');
const backButton = document.getElementById('backButton');

// TODO: Create a function that builds an element and appends it to the DOM
function createElement('p', {class:'entries'}, 'main', '') {

    const element = document.createElement('p');
    
    element.textContent = textContent;

    main.appendChild(element);
    
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
