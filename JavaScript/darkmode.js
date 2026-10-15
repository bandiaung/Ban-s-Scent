let darkmode = localStorage.getItem("darkmode");

const themeSwitch = document.getElementById("theme-switch");
const phoneThemeSwitch = document.getElementById('phone-theme-switch')
const logoImage = document.getElementById("logo-image");
const bestSeller = document.getElementById("best-seller-image");
const flashSale = document.getElementById("flash-sale");
const helpDesk1 = document.getElementById('help-desk1');
const helpDesk2 = document.getElementById('help-desk2');
const onlineShop = document.getElementById('online-shop-img');
const onlineShopAbout = document.getElementById('online-shop-about');



const changeImage = () => {
  if (document.body.classList.contains("darkmode")) {
    logoImage.src = "images/logo-darkmode.png";
    bestSeller.src = "image/item-2.png";
    flashSale.src = "images/flash-sale-bg-darkmode.jpg";
    helpDesk1.src = "images/reason-image-1-darkmode.jpg";
    helpDesk2.src = "images/reason-image-2-darkmode.jpg";
    onlineShop.src = "image/online-shop-img-darkmode.png";
    onlineShopAbout.src = "image/online-shop-about-darkmode.png";


  } else {
    logoImage.src = "images/logo.png";
    bestSeller.src = "image/item-35.png";
    flashSale.src = "images/flash-sale-bg.jpg";
    helpDesk1.src = "images/reason-image1.jpg";
    helpDesk2.src = "images/reason-image2.jpg";
    onlineShop.src = "image/online-shop-img.png";
    onlineShopAbout.src = "image/online-shop-about.png";

    
  }
};

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  changeImage();
};
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  changeImage();
};
if (darkmode === "active"){
enableDarkmode();
} ;

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  location.reload();
});

phoneThemeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  location.reload();

})
// end dark mode//

// start FAQ//

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("open");
  });
});
