// TODO: Create a variable that selects the form element
// const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    const errorMessageElement = document.getElementById('error');
    if (!username || !title || !content) {
        errorMessageElement.textContent = "You must enter data on all fields.";
        return;
    }

    errorMessageElement.textContent = '';

    localStorage.setItem('formData', JSON.stringify({ username, title, content }));

    window.location.href = 'blog.html';
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.getElementById('form').addEventListener('submit', handleFormSubmit);