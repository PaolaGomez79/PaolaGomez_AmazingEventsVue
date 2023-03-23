export default function darkTheme(btn, classDark, classDarkMain){
  const themeBtn = document.querySelector(btn);
  const selectors = document.querySelectorAll("[data-dark]");
  const particularSelectors = document.querySelectorAll("[data-dark-main]");
 
  let moon = "🌙";
  let sun = "☀️";

  const lightMode = () => {
    selectors.forEach(selector => selector.classList.remove(classDark));
    particularSelectors.forEach(selector => selector.classList.remove(classDarkMain));
    const temaCard = document.querySelectorAll(".card");
    for (let i = 0; i < temaCard.length; i++) {
      temaCard[i].classList.remove("dark-mode");
    };
    const temaSmall = document.querySelectorAll("small");
    for (let i = 0; i < temaSmall.length; i++) {
      temaSmall[i].classList.remove("dark-mode");
    };
    themeBtn.textContent = moon;
    localStorage.setItem("theme","light");
  };

  const darkMode = () => {
    selectors.forEach(selector => selector.classList.add(classDark));
    particularSelectors.forEach(selector => selector.classList.add(classDarkMain));
    const temaCard = document.querySelectorAll(".card");
    for (let i = 0; i < temaCard.length; i++) {
      temaCard[i].classList.add("dark-mode");
    };
    const temaSmall = document.querySelectorAll("small");
    for (let i = 0; i < temaSmall.length; i++) {
      temaSmall[i].classList.add("dark-mode");
    };
    themeBtn.textContent = sun;
    localStorage.setItem("theme","dark");
  };

  document.addEventListener("click", e => {
    if(e.target.matches(btn)){
      if(themeBtn.textContent === moon){
        darkMode();
      }else{
        lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
    if(localStorage.getItem("theme") === "light") lightMode();
    if(localStorage.getItem("theme") === "dark") darkMode(); 
  });

}; 