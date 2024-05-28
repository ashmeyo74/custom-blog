

const blog = document.getElementById("blogPost");
let failureCondition = document.getElementById("failureCondition");

// Declares formResult as an empty  array  to assign from localStrage
let formResult = [];

// Checks if localStorage has a variable, if so, parses it. If not, assigns formResult to a blank array.
if (localStorage.getItem('blogPost') != null) {
    formResult = JSON.parse(localStorage.getItem('blogPost'));
} else {
    formResult = [];
}

    
function movePage() {
        window.location="./blog.html";
};

// On submit of the form, assigns the results to an object array and saves to local storage.
function formSubmit(event) {
    let username = document.getElementById("username").value;
let title = document.getElementById("titlePrompt").value;
let postContent = document.getElementById("postPrompt").value;
    // Prevents form from refreshing on submit.
    event.preventDefault();

    // Checks ot see if username, title or postContent have text in them. If not, runs a failure condition. 
    if (username === '') {
        failureCondition.innerHTML = "<p>ERROR: Username can not be blank.</p>";
    } else if (title === '') {
        failureCondition.innerHTML = "<p>ERROR: Title cannot be blank.</p>";
    } else if (postContent === '') {
        failureCondition.innerHTML = "<p>ERROR: Post content cannot be blank. </p>";
    } else {
 
    let formArray = {
        Username: document.getElementById("username").value,
        Title: document.getElementById("titlePrompt").value,
        Post_Content: document.getElementById("postPrompt").value
    };
    // If conditions are met, pushes formArray to local storage and moves the page to blog.html
    formResult.push(formArray);
    localStorage.setItem('blogPost', JSON.stringify(formResult));


    movePage();
    
} };

// Listens for the submit button to be clicked, then runs the formSubmit function.
blog.addEventListener("submit", formSubmit); 

