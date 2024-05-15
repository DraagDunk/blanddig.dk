async function getFirstParagraph(title) {
    const url = `https://da.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${title}&exintro=true&explaintext=true&origin=*`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const pageId = Object.keys(data.query.pages)[0];
        const firstParagraph = data.query.pages[pageId].extract;
        return firstParagraph;
    } catch (error) {
        console.error('Error fetch data:', error);
        return null
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach(box => {
        let title = box.getAttribute("wiki_title");
        let p = box.querySelector(".info-paragraph");

        console.log("Now fetching for", title, "...")
        getFirstParagraph(title).then(
            info => {
                p.innerHTML = info;
            }
        )
    })

})