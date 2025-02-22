function task(title, description, importance) {
    const screen = document.querySelector("#screen");
    
    console.log(`Hey this is the task modoule: ${title}, ${ description}, ${importance}`);

    const card = document.createElement("div");
    card.classList.add("card");
    if (importance === true) {
        card.classList.add("important-task");
    }

    card.innerHTML = `
        <div class="card-content">
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Date Added: </p>
        </div>
        <button class="card-complete">Toggle Complete</button>
        <button class="card-delete">Delete Task</button>
    `;

    screen.prepend(card);

}

export { task }