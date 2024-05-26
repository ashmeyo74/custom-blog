// Selects element from webpage
const mainDiv = document.querySelector(".main")
const newPostDiv = document.querySelector(".newPostDiv")
const dark = document.querySelector("#darkMode");
const light = document.querySelector("#lightMode");
const bgLight = document.querySelector(".wholeContainer")
const bgDark = document.querySelector(".wholeContainer")

// Declares the current mode, set on light or retrieved from localStorage
let mode = localStorage.getItem('mode') || 'light';


// sets the page elements to dark mode
function setDark () {
    mode = 'dark';
    dark.style.display = "none";
    light.style.display = "block";
    mainDiv.setAttribute('class', 'main dark');
    newPostDiv.setAttribute('class', 'newPostDiv divDark');
    bgLight.setAttribute('class', 'wholeContainer darkMode')

    localStorage.setItem('mode', 'dark');
};

// Sets the page elements to light mode
function setLight () {
    mode = 'light';
    dark.style.display = "block";
    light.style.display = "none";
    mainDiv.setAttribute('class', 'main light');
    newPostDiv.setAttribute('class', 'newPostDiv divLight');
    bgDark.setAttribute('class', 'wholeContainer lightMode')

    localStorage.setItem('mode', 'light');
}

// Set initial mode based on localStorage
if (mode === 'dark') {
    setDark();
} else {
    setLight();
}

// Add event listeners to buttons
dark.addEventListener('click', function() {
    setDark();
});

light.addEventListener('click', function() {
    setLight();
});
