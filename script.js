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



/* ================= WHATSAPP PROJECT ENQUIRY ================= */

const projectForm =
  document.querySelector("#projectForm");


if (projectForm) {

  projectForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document
          .querySelector("#name")
          .value
          .trim();


      const email =
        document
          .querySelector("#email")
          .value
          .trim();


      const projectType =
        document
          .querySelector("#projectType")
          .value;


      const budget =
        document
          .querySelector("#budget")
          .value;


      const message =
        document
          .querySelector("#message")
          .value
          .trim();


      const whatsappMessage =

`Hello Toby 👋

My name is ${name}.

My email is ${email}.

I am interested in:
${projectType}

My budget is:
${budget || "Not specified"}

Here are the details of my project:

${message}

I found Tob's Tech through the website and would like to discuss working together.`;


      const whatsappNumber =
        "2348035103083";


      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${
          encodeURIComponent(whatsappMessage)
        }`;


      window.open(
        whatsappURL,
        "_blank"
      );

    }

  );

}
