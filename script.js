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

/* =====================================================
   SHOPIFY PAGE
   ===================================================== */


/* ================= SHOPIFY HERO ================= */

.shopify-hero {

  padding-top: 120px;

  padding-bottom: 120px;

}


.shopify-hero h1 {

  max-width: 1000px;

  font-size: clamp(4rem, 8vw, 9rem);

}


.shopify-hero p {

  max-width: 620px;

  margin-top: 38px;

  color: var(--muted);

  font-size: 1.08rem;

  line-height: 1.8;

}


.hero-actions {

  display: flex;

  align-items: center;

  gap: 30px;

  margin-top: 42px;

}


.text-link {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  font-size: 0.8rem;

  font-weight: 600;

}


.text-link span {

  transition: transform 0.3s ease;

}


.text-link:hover span {

  transform: translateY(4px);

}


.hero-actions .text-link:hover span {

  transform: translateY(3px);

}


/* ================= SHOPIFY INTRO ================= */

.shopify-intro {

  background: #e8e5df;

}


.shopify-intro-grid {

  display: grid;

  grid-template-columns: 1fr 0.8fr;

  gap: 100px;

  align-items: start;

}


.shopify-intro h2 {

  font-size: clamp(3rem, 5vw, 5.5rem);

}


.shopify-intro-copy {

  padding-top: 12px;

}


.shopify-intro-copy p {

  max-width: 450px;

  margin-bottom: 25px;

  color: var(--muted);

  line-height: 1.8;

}


/* ================= SHOPIFY SERVICES ================= */

.shopify-services-grid {

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 0 70px;

  margin-top: 70px;

}


.shopify-service {

  min-height: 270px;

  padding: 28px 0 45px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);

}


.shopify-service > span {

  display: block;

  color: #888;

  font-size: 0.7rem;

}


.shopify-service h3 {

  max-width: 400px;

  margin: 35px 0 18px;

  font-size: 1.8rem;

}


.shopify-service p {

  max-width: 400px;

  color: #aaa;

  line-height: 1.7;

}


/* ================= SECURITY SECTION ================= */

.security-section {

  background: #f4f2ed;

}


.security-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 100px;

  align-items: center;

}


.security-visual {

  min-height: 460px;

  display: grid;

  place-items: center;

  padding: 40px;

  background:

    radial-gradient(

      circle at 50% 50%,

      rgba(125, 255, 170, 0.18),

      transparent 45%

    ),

    #e7e4de;

}


.security-card {

  width: min(100%, 430px);

  padding: 26px;

  background: rgba(255, 255, 255, 0.6);

  border: 1px solid rgba(255, 255, 255, 0.75);

  border-radius: 18px;

  box-shadow:

    0 30px 70px rgba(0, 0, 0, 0.12),

    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  backdrop-filter: blur(18px);

}


.security-card-top {

  display: flex;

  justify-content: space-between;

  padding-bottom: 22px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  font-size: 0.65rem;

  letter-spacing: 0.12em;

}


.security-dot {

  color: #25d366;

}


.security-lines {

  margin-top: 20px;

}


.security-lines > div {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  padding: 18px 0;

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

}


.security-lines span {

  font-size: 0.85rem;

}


.security-lines strong {

  font-size: 0.6rem;

  letter-spacing: 0.1em;

  color: #777;

}


.security-copy h2 {

  margin: 25px 0;

  font-size: clamp(3rem, 5vw, 5.5rem);

}


.security-copy p {

  max-width: 500px;

  margin-bottom: 20px;

  color: var(--muted);

  line-height: 1.8;

}


/* ================= SHOPIFY PROCESS ================= */

.shopify-process-grid {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 25px;

  margin-top: 70px;

}


.shopify-process {

  padding-top: 22px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);

}


.shopify-process > span {

  color: #888;

  font-size: 0.7rem;

}


.shopify-process h3 {

  margin: 40px 0 15px;

  font-size: 1.7rem;

}


.shopify-process p {

  color: #aaa;

  line-height: 1.7;

}


/* ================= SHOPIFY RESPONSIVE ================= */

@media (max-width: 900px) {


  .shopify-intro-grid,

  .security-grid {

    grid-template-columns: 1fr;

    gap: 55px;

  }


  .shopify-process-grid {

    grid-template-columns: repeat(2, 1fr);

  }

}


@media (max-width: 650px) {


  .shopify-hero {

    padding-top: 75px;

    padding-bottom: 80px;

  }


  .hero-actions {

    align-items: flex-start;

    flex-direction: column;

    gap: 22px;

  }


  .shopify-services-grid {

    grid-template-columns: 1fr;

    gap: 0;

  }


  .security-visual {

    min-height: 350px;

    padding: 20px;

  }


  .shopify-process-grid {

    grid-template-columns: 1fr;

  }


}
