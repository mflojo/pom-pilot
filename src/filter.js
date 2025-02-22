function filter() {
    const filterAll = document.querySelector("#filterAll");
    const filterImportant = document.querySelector("#filterImportant");
    const filterIncomplete = document.querySelector("#filterIncomplete");
    const filterComplete = document.querySelector("#filterComplete");
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const isImportant = card.classList.contains("important-task");
        const isCompleted = card.classList.contains("completed-task");

        if (filterAll.checked) {
            card.style.display = "block";
        } else if (filterImportant.checked && isImportant) {
            card.style.display = "block";
        } else if (filterIncomplete.checked && !isCompleted) {
            card.style.display = "block";
        } else if (filterComplete.checked && isCompleted) {
            card.style.display = "block"; // Show only completed tasks
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match the filter
        }
    });
}

export { filter }