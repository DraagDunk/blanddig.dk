const showInfoButton = document.getElementById("show-info");
showInfoButton.addEventListener("click", () => {
    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach(box => {
        box.toggleAttribute("hidden");
    })
})