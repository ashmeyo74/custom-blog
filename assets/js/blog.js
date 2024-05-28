
// Declares formResult as an empty  array  to assign from localStrage
let formResult = [];

// Checks if localStorage has a variable, if so, parses it. If not, assigns formResult to a blank array.
if (localStorage.getItem('blogPost') != null) {
    formResult = JSON.parse(localStorage.getItem('blogPost'));
} else {
    formResult = [];
}


// Creates blog post dynamically by appending divs to their parent element in cascading order. 
function createPost() {
    // For each array found in the formResult storage, generate a new post.
    for(let post of formResult) { 
    let container = document.getElementById("mainLight");

    let blogContainer = document.createElement("div");
    blogContainer.classList.add("blogContainer");

    let topInfo = document.createElement("div");
    topInfo.classList.add("topInfo");

    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = post.Title;

    let username = document.createElement("p");
    username.classList.add("postedBy");
    username.textContent = `POSTED BY: ${post.Username}`;

    let postContent = document.createElement("div");
    postContent.classList.add("postContent");
    postContent.textContent = post.Post_Content;

    topInfo.appendChild(title);
    topInfo.appendChild(username);
    blogContainer.appendChild(topInfo);
    blogContainer.appendChild(postContent);
    container.appendChild(blogContainer);

    }
};

createPost();