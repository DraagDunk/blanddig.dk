
document.addEventListener("DOMContentLoaded", () => {
  const infoBoxes = document.querySelectorAll(".party-page.info-box");
  infoBoxes.forEach(box => {
      let link = box.getAttribute("info-link");
      let p = box.querySelector(".info-paragraph");

      console.log("Now fetching at", link, "...")

      fetch(link).then(
          response => {
              response.text().then(
                  info => {
                      console.log(info)
                  }
              )
          }
      )
  })

})