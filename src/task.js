import { format } from "date-fns";
import { storageSave } from "./storageSave";

function task(title, description, importance) {
    const screen = document.querySelector("#screen");
    
    console.log(`Hey this is the task modoule: ${title}, ${ description}, ${importance}`);

    const card = document.createElement("div");
    card.classList.add("card");
    if (importance === true) {
        card.classList.add("important-task");
    }

    const now = new Date();
    const date = format(now, "EEE MMM dd yyyy HH:mm:ss");

    card.innerHTML = `
        <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <p class="card-date">Date Added: ${date}</p>
        </div>
        <button class="card-complete">Toggle Complete</button>
        <button class="card-delete">Delete Task</button>
    `;

    screen.prepend(card);
    // storageSave();

}

export { task }