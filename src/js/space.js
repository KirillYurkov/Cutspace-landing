let spaceSwiper = document.querySelector(".spaceSwiper");
if (spaceSwiper) {
  let ss1 = document.querySelector(".ss-1");
  console.log(ss1)
  let ss2 = document.querySelector(".ss-2");
  let ss3 = document.querySelector(".ss-3");
  let tt1 = document.querySelector(".tt-1");
  let tt2 = document.querySelector(".tt-2");
  let tt3 = document.querySelector(".tt-3");

  ss1.addEventListener("mouseenter", function () {
    tt1.classList.add("show");
  });
  ss1.addEventListener("mouseleave", function () {
    tt1.classList.remove("show");
  });
  ss2.addEventListener("mouseenter", function () {
    tt2.classList.add("show");
  });
  ss2.addEventListener("mouseleave", function () {
    tt2.classList.remove("show");
  });

  ss3.addEventListener("mouseenter", function () {
    tt3.classList.add("show");
  });
  ss3.addEventListener("mouseleave", function () {
    tt3.classList.remove("show");
  });
}
