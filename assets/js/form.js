const blog = document.getElementById("blogPost");
const user = document.getElementById("username");
const title = document.getElementById("titlePrompt");
const post = document.getElementById("postPrompt");

// Declares formResult as an undefined element to assign from localStrage.
let formResult;

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
        Username: user.value,
        Title: title.value,
        Post_Content: post.value
    });
    localStorage.setItem('blogPost', JSON.stringify(formResult));
    console.log(formResult); 
};

blog.addEventListener("submit", formSubmit);
