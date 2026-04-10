let tabBtns = document.querySelectorAll(".tabs__btn");
let tabContent = document.querySelectorAll(".tabs__content-item");
for (let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", function (e) {
    let btnAttr = this.getAttribute('data-btn');
    for (let j = 0; j < tabContent.length; j++) {
      let contentAttr=tabContent[j].getAttribute('data-content');
      if (btnAttr == contentAttr) {
        tabBtns[j].classList.add("active");
        tabContent[j].classList.add("active")
      } else {
        tabBtns[j].classList.remove("active");
        tabContent[j].classList.remove("active")
      }
    }
  });
}
