// DOM Manipulation

//  Event Propagation

// Add event when clicking anywhere in the browser window
window.addEventListener(
    "click",
    function () {
        console.log("Window");
    },
    false
);

// Add event when clicking anywhere in the document
document.addEventListener(
    "click",
    function () {
        console.log("Document");
    },
    false
);

// Add event when clicking anywhere in "div2"

document.querySelector(".div2").addEventListener(
    "click",
    function (e) {
        // e.stopPropagation();
        console.log("DIV 2");
    },
    { once: true }
);

// Add event when clicking anywhere in "div1"

document.querySelector(".div1").addEventListener(
    "click",
    function () {
        console.log("DIV 1");
    },
    false
);

// Add event when clicking anywhere in "div1"

document.querySelector(".button").addEventListener(
    "click",
    function (e) {
        console.log((e.target.innerText = "Clicked !"));
    },
    false
);
