const menuButton = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");
document.documentElement.classList.add("js");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
    });
  });
}

const sections = document.querySelectorAll(".section-fade");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}
