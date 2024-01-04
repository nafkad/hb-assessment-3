// Edit HTML - Part 4

// Add an event listern to the HTML file

const button = document.querySelector('#color-button');

function myFavoriteColor () {
    // Grab the faveColor, then put in your favorite color "Yellow"
    const faveColor = document.querySelector("#faveColor")
    faveColor.innerHTML = "Yellow";
}
button.addEventListener("mouseover", myFavoriteColor);


/* 

 button.addEventListener("mouseover", () => {
    alert("Yellow");
 });


// Add an event listern to the HTML file
 const myFavoriteColor = () => {
    alert("Yellow");
 }
 button.addEventListener("mouseover", myFavoriteColor);

 */