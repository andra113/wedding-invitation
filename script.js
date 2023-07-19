// getting id for js manipulation
const buttonCover = document.getElementById("buttonCover");
const homePage = document.getElementById("home");
const coverPage = document.getElementById("cover");
const header = document.querySelector('.header');

// javascript manipulation to show home page when button " buka undangan" clicked and hide cover page
buttonCover.addEventListener("click", function () {
  homePage.style.display = "flex";
  coverPage.style.display = "none";
  header.classList.toggle('active');
});
