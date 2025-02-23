function storageSave() {
    const cards = Array.from(document.querySelectorAll(".card")).map(card => ({
        title: card.querySelector(".card-title").innerText,
        description: card.querySelector(".card-description").innerText,
        completed: card.classList.contains("completed-task"),
        important: card.classList.contains("important-task"),
        date: card.querySelector(".card-date").innerHTML,
    }));

    localStorage.setItem("tasks", JSON.stringify(cards));
}

export { storageSave }