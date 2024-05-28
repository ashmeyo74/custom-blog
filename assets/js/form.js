

const blog = document.getElementById("blogPost");

// Declares formResult as an empty  array  to assign from localStrage
let formResult = [];

// Checks if localStorage has a variable, if so, parses it. If not, assigns formResult to a blank array.
if (localStorage.getItem('blogPost') != null) {
    formResult = JSON.parse(localStorage.getItem('blogPost'));
} else {
    formResult = [];
}

// On submit of the form, assigns the results to an object array and saves to local storage.
function formSubmit(event) {
    event.preventDefault();
    formResult.push({
        Username: document.getElementById("username").value,
        Title: document.getElementById("titlePrompt").value,
        Post_Content: document.getElementById("postPrompt").value
    });
    localStorage.setItem('blogPost', JSON.stringify(formResult));
    console.log(formResult); 
};

// Listens for the submit button to be clicked, then runs the formSubmit function.
blog.addEventListener("submit", formSubmit); 

