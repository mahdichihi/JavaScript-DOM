// style changing plus using the break statement
// ******************************************************
// const listItems = document.querySelectorAll("li");
// console.log("listItems");

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "red";

//     if (i === 2) {
//         break;
//     }
// }
// ******************************************************

// Creating elements
// ******************************************************
// const List = document.querySelector("ul");
// const newLi = document.createElement("li");

// // Adding element

// List.append(newLi);

// // Modifying the text

// newLi.innerText = "Dope";

// // Modifying attributes and classes

// newLi.classList.add("list-items");

// // newLi.classList.remove("list-items");

// console.log(newLi.classList.contains("list-items"));

// // Remove elements

// newLi.remove();

// // ******************************************************

// Traverse the DOM
// // ******************************************************
//  parent node traversal

// let ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// child node traversal

// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = "yellow";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling node traversal

let ul = document.querySelector("ul");
const div = document.querySelector("div");

console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
