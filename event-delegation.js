// DOM Manipulation

//  Event Delegation

// It allows users to append a SINGLE event listener
// to a parent element that adds it to all of its
// present AND future descendants that match a selector.

// document.querySelector("#football").addEventListener("click", function () {
//     console.log("football is clicked");
//     football.style.backgroundColor = "lightgrey";
// });

// football
// document.querySelector("#football").addEventListener("click", function (e) {
//     console.log("football is clicked");

//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// // basketball
// document.querySelector("#basketball").addEventListener("click", function (e) {
//     console.log("basketball is clicked");

//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// // boxing
// document.querySelector("#boxing").addEventListener("click", function (e) {
//     console.log("boxing is clicked");

//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// // tennis
// document.querySelector("#tennis").addEventListener("click", function (e) {
//     console.log("tennis is clicked");

//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// // golf
// document.querySelector("#golf").addEventListener("click", function (e) {
//     console.log("golf is clicked");

//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// this time by using a SINGLE event listener to a parent element
document.querySelector("#sports").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id") + " is clicked");
    const target = e.target;
    if (target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");
sports.appendChild(newSport);
