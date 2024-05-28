// Selects element from webpage
const mainDiv = document.querySelector(".main")
const newPostDiv = document.querySelector(".newPostDiv")
const dark = document.querySelector("#darkMode");
const light = document.querySelector("#lightMode");
const bgLight = document.querySelector(".wholeContainer")
const bgDark = document.querySelector(".wholeContainer")

// Declares the current mode, set on light or retrieved from localStorage
let mode = localStorage.getItem('mode') || 'light';


// Sets the page elements to dark mode, ensures that elements exist on the page, otherwise skips over the line
function setDark() {
    mode = 'dark';
    if (dark) dark.style.display = "none";
    if (light) light.style.display = "block";
    if (mainDiv) mainDiv.setAttribute('class', 'main dark');
    if (newPostDiv) newPostDiv.setAttribute('class', 'newPostDiv divDark');
    if (bgLight) bgLight.setAttribute('class', 'wholeContainer darkMode');

    localStorage.setItem('mode', 'dark');
}

// Sets the page elements to light mode, ensures that elements exist on the page, otherwise skips over the line
function setLight() {
    mode = 'light';
    if (dark) dark.style.display = "block";
    if (light) light.style.display = "none";
    if (mainDiv) mainDiv.setAttribute('class', 'main light');
    if (newPostDiv) newPostDiv.setAttribute('class', 'newPostDiv divLight');
    if (bgDark) bgDark.setAttribute('class', 'wholeContainer lightMode');

    localStorage.setItem('mode', 'light');
}

// Set initial mode based on localStorage
if (mode === 'dark') {
    setDark();
} else {
    setLight();
}

// Add event listeners to buttons
if (dark) {
    dark.addEventListener('click', function() {
        setDark();
    });
}

if (light) {
    light.addEventListener('click', function() {
        setLight();
    });
}