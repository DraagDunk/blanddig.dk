const showInfoButton = document.getElementById("show-info");
showInfoButton.addEventListener("click", () => {
    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach(box => {
        box.toggleAttribute("hidden");
    })
})

const showActionsButton = document.getElementById("show-actions");
showActionsButton.addEventListener("click", () => {
    const actionsAside = document.querySelector(".actions");
    if (actionsAside.classList.contains("open")) {
        actionsAside.classList.remove("open");
    } else {
        actionsAside.classList.add("open");
    }
})