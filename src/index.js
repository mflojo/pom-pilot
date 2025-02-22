import "./styles.css";
import { input } from "./input.js";


console.log("Testing js, this is the DOM loaded");

const button = document.querySelector("#add-task");
const dialog = document.querySelector("#user-input");

button.addEventListener("click", () => {
    console.log("you clicked on the Add New Task button!");
    input();
    


    
});