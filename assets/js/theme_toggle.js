const themeToggle = document.getElementById("theme-toggle");
const slider = document.querySelector(".slider");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  slider.classList.toggle("dark");
  slider.classList.toggle("light");
  if (html.dataset.bsTheme == "dark") {
    html.dataset.bsTheme = "light";
  } else {
    html.dataset.bsTheme = "dark";
  }
});
