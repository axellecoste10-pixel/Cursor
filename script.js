const burgerButton = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");

if (burgerButton && navMenu) {
  burgerButton.addEventListener("click", () => {
    const expanded = burgerButton.getAttribute("aria-expanded") === "true";
    burgerButton.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      burgerButton.setAttribute("aria-expanded", "false");
    });
  });
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((item) => observer.observe(item));

const hero = document.querySelector(".hero__media img");
window.addEventListener("scroll", () => {
  if (!hero) return;
  const y = window.scrollY * 0.06;
  hero.style.transform = `translateY(${Math.min(y, 20)}px)`;
});
