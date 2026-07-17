/* =====================================================
   TOB'S TECH — INTERACTION SCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");


if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.innerHTML = isOpen
      ? "✕"
      : "☰";

  });


  /* Close menu after clicking a link */

  const mobileLinks = mobileMenu.querySelectorAll("a");


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuToggle.innerHTML = "☰";

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const currentPage = window.location.pathname.split("/").pop();


const navLinks = document.querySelectorAll(
  ".desktop-nav a"
);


navLinks.forEach((link) => {

  const linkPage = link
    .getAttribute("href")
    .split("/")
    .pop();


  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {

    link.classList.add("active");

  }

});


/* ================= YEAR ================= */

const yearElements = document.querySelectorAll(
  "[data-year]"
);


yearElements.forEach((element) => {

  element.textContent = new Date().getFullYear();

});
