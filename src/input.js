import { task } from "./task.js";

function input() {
    const dialog = document.querySelector("#user-input");
    const userTitle = document.querySelector("#task-title");
    const userDescription = document.querySelector("#task-description");
    const userImportance = document.querySelector("#task-importance");
    const userConfirm = document.querySelector("#confirm-button");

    dialog.showModal();

    userConfirm.addEventListener("click", (e) => {
        e.preventDefault();

        let newTitle = userTitle.value.trim();
        let newDescription = userDescription.value.trim();
        let newImportance = userImportance.value === "true";

        console.log(`user input: ${newTitle}, ${newDescription}, ${newImportance}`);
        
        task(newTitle, newDescription, newImportance);

        userTitle.value = "";
        userDescription.value = "";
        userImportance.value = "false";

        dialog.close();

    });

    
    
}

export { input }