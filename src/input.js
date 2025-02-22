function input() {
    const screen = document.querySelector("#screen");
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

        if (!newTask || !newDescription) {
            alert("Please enter valid task details!");
            return;
        }
        
        let newTask = Task(newTitle, newDescription, newImportance);

    });

    
}

export { input }