let servContent = document.querySelector(".serv-content");
servCards = servContent.querySelectorAll(".serv-card");
servContent.addEventListener("mouseenter", function (event) {
  for (let card of servCards) {
    card.classList.remove("serv-card--active");
    card.addEventListener("mouseenter", function (event) {
      event.target.classList.add("serv-card--active");
    });
    card.addEventListener("mouseleave", function (event) {
      event.target.classList.remove("serv-card--active");
    });
  }
});
