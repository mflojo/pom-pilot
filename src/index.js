import "./styles.css";
import { input } from "./input.js";
import { filter } from "./filter.js";


console.log("Testing js, this is the DOM loaded");

const button = document.querySelector("#add-task");

button.addEventListener("click", () => {
    console.log("you clicked on the Add New Task button!");
    input();
});

const screen = document.querySelector("#screen");

screen.addEventListener("click", function(event) {
    if (event.target.classList.contains("card-delete")) {
        const card = event.target.closest(".card");
        if (card) {
            card.remove();  // Remove the card
        }
    }
});

screen.addEventListener("click", function(event) {
    if (event.target.classList.contains("card-complete")) {
        const card = event.target.closest(".card");
        card.classList.toggle("completed-task");
    }
});

const filterAll = document.querySelector("#filterAll");
const filterImportant = document.querySelector("#filterImportant");
const filterIncomplete = document.querySelector("#filterIncomplete");
const filterComplete = document.querySelector("#filterComplete");

filterAll.addEventListener("change", filter);
filterImportant.addEventListener("change", filter);
filterIncomplete.addEventListener("change", filter);
filterComplete.addEventListener("change", filter);