let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById("theme-switch");
const logoImage = document.getElementById("logo-image");

const changeImage = () => {
  if (document.body.classList.contains("darkmode")) {
    logoImage.src = "images/logo-darkmode.png";
    
  } else {
    logoImage.src = "images/logo.png";
    
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
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");

  if(darkmode !== "active"){
    enableDarkmode();

  }else{
    disableDarkmode();
  }
  
});
