const regObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    }
  });
});

regObserver.observe(document.querySelector(".card-project.ku-registrations"));

const wikiObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("delayed-slide-up");
    }
  });
});

wikiObserver.observe(document.querySelector(".card-project.ku-wiki"));
