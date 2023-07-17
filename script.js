// getting id for js manipulation
const buttonCover = document.getElementById("buttonCover");
const homePage = document.getElementById("home");
const coverPage = document.getElementById("cover")

// javascript manipulation to show home page when button " buka undagan" clicked and hide cover page
buttonCover.addEventListener("click", function () {
  homePage.style.display = "flex";
  coverPage.style.display = "none";
});
