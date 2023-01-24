// DOM manipulation

//  Event Listeners

// element.addEventListener()

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//     alert("I Also love JavaScript");
// }
// buttonTwo.addEventListener("click", alertBtn);

// const backGround = document.querySelector(".box-3");

// function blueBckgrnd() {
//     backGround.style.backgroundColor = "blue";
// }
// backGround.addEventListener("mouseover", blueBckgrnd);
// **********************************************************

// Reveal event

const revealBtn = document.querySelector(".Reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");
revealBtn.style.width = "100%";
revealBtn.style.height = "17em";

function hideContent() {
    if (hiddenContent.classList.contains("Reveal-btn")) {
        hiddenContent.classList.remove("Reveal-btn");
        revealBtn.innerText = "Reveal More";
    } else {
        hiddenContent.classList.add("Reveal-btn");
        revealBtn.innerText = "Hide Content";
    }
}

revealBtn.addEventListener("click", hideContent);
