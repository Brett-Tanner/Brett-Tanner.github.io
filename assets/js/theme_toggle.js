const themeToggle = document.getElementById("theme-toggle");
const slider = document.querySelector(".slider");
const html = document.documentElement;
// Gets and sets chosen theme from cookies
const getStoredTheme = () => localStorage.getItem("theme");
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

slider.addEventListener("click", () => {
  slider.classList.toggle("dark");
  slider.classList.toggle("light");
  if (html.dataset.bsTheme == "dark") {
    setStoredTheme("light");
    html.dataset.bsTheme = "light";
  } else {
    setStoredTheme("dark");
    html.dataset.bsTheme = "dark";
  }
});

// Returns the stored theme if there is one, else returns the users's pref
const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Sets the theme on HTML and puts the slider in the correct position
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-bs-theme", theme);
  slider.classList.add(theme);
};

setTheme(getPreferredTheme());
