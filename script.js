/* ==========================================================
   TOB'S TECH V2
   PREMIUM INTERACTIONS
========================================================== */

/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ===========================
   NAVBAR
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/* ===========================
   SCROLL REVEAL
=========================== */

const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

reveals.forEach(el=>observer.observe(el));


/* ===========================
   COUNTERS
=========================== */

const counters=document.querySelectorAll(".counter");

const speed=45;

counters.forEach(counter=>{

const animate=()=>{

const value=+counter.dataset.target;

const data=+counter.innerText;

const increment=value/speed;

if(data<value){

counter.innerText=Math.ceil(data+increment);

requestAnimationFrame(animate);

}else{

counter.innerText=value;

}

};

animate();

});


/* ===========================
   FLOATING PARALLAX
=========================== */

const floating=document.querySelectorAll(".floating-card");

document.addEventListener("mousemove",e=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

floating.forEach((card,index)=>{

const move=(index+1)*12;

card.style.transform=

`translate(${x*move}px,${y*move}px)`;

});

});


/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});


/* ===========================
   PROJECT CARD HOVER
=========================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(1200px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/* ===========================
   CURSOR GLOW
=========================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ===========================
   YEAR
=========================== */

const year=document.getElementById("year");

if(year){

year.innerText=new Date().getFullYear();

}


/* ===========================
   MOBILE MENU
=========================== */

const menu=document.querySelector(".menu-toggle");

const mobile=document.querySelector(".mobile-menu");

if(menu && mobile){

menu.addEventListener("click",()=>{

mobile.classList.toggle("open");

});

}


/* ===========================
   SMOOTH LINKS
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ===========================
   HERO IMAGE FLOAT
=========================== */

const hero=document.querySelector(".hero-photo");

if(hero){

window.addEventListener("scroll",()=>{

hero.style.transform=

`translateY(${window.scrollY*.08}px)`;

});

}


/* ===========================
   TYPING EFFECT
=========================== */

const typing=document.querySelector(".typing");

if(typing){

const words=[

"Website Developer",

"Shopify Expert",

"Frontend Engineer",

"UI Designer"

];

let word=0;

let char=0;

let deleting=false;

function type(){

const current=words[word];

typing.textContent=current.substring(0,char);

if(!deleting){

char++;

if(char>current.length){

deleting=true;

setTimeout(type,1300);

return;

}

}else{

char--;

if(char===0){

deleting=false;

word=(word+1)%words.length;

}

}

setTimeout(type,deleting?45:90);

}

type();

}
/* ==========================================================
   TOB'S TECH V2
   ADVANCED EFFECTS
========================================================== */


/* ===========================
   CURSOR TRAIL
=========================== */

const cursor=document.createElement("div");
cursor.className="cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


/* ===========================
   MAGNETIC BUTTONS
=========================== */

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=
`translate(${x*.18}px,${y*.18}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});


/* ===========================
   PARALLAX BACKGROUND
=========================== */

const blur1=document.querySelector(".blur1");
const blur2=document.querySelector(".blur2");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

if(blur1){

blur1.style.transform=
`translate(${x*40}px,${y*40}px)`;

}

if(blur2){

blur2.style.transform=
`translate(${-x*50}px,${-y*50}px)`;

}

});


/* ===========================
   FADE SECTIONS
=========================== */

const sections=document.querySelectorAll("section");

const fadeObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.08
});

sections.forEach(section=>{

section.style.opacity=0;
section.style.transform="translateY(70px)";
section.style.transition="all .9s ease";

fadeObserver.observe(section);

});


/* ===========================
   HERO TILT
=========================== */

const heroImage=document.querySelector(".hero-photo");

if(heroImage){

heroImage.addEventListener("mousemove",(e)=>{

const rect=heroImage.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/22;

const rotateY=(rect.width/2-x)/22;

heroImage.style.transform=
`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform="";

});

}


/* ===========================
   FLOATING ELEMENTS
=========================== */

document.querySelectorAll(".floating-card").forEach((card,index)=>{

setInterval(()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-15px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500+(index*700),

iterations:1

});

},3500+(index*700));

});


/* ===========================
   IMAGE ZOOM
=========================== */

document.querySelectorAll(".project-image").forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.backgroundSize="115%";

});

image.addEventListener("mouseleave",()=>{

image.style.backgroundSize="100%";

});

});


console.log("TOB'S TECH V2 LOADED");
/* ==========================================================
   TOB'S TECH V2
   SCROLL PROGRESS BAR
========================================================== */

const progressBar=document.createElement("div");

progressBar.className="scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/height)*100;

progressBar.style.width=progress+"%";

});


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const navItems=document.querySelectorAll(".navbar a");

const pageSections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",()=>{

let current="";

pageSections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ==========================================================
   BUTTON SHINE EFFECT
========================================================== */

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.classList.add("shine");

});

button.addEventListener("mouseleave",()=>{

button.classList.remove("shine");

});

});


/* ==========================================================
   PROJECT CARD STAGGER
========================================================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach((card,index)=>{

card.style.transitionDelay=`${index*0.12}s`;

});


/* ==========================================================
   LAZY IMAGE FADE
========================================================== */

document.querySelectorAll("img").forEach(img=>{

img.onload=()=>{

img.style.opacity="1";

};

img.style.opacity="0";

img.style.transition="opacity .8s ease";

});


/* ==========================================================
   BACK TO TOP
========================================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="back-top";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>700){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* Scroll Progress */

.scroll-progress{

position:fixed;

top:0;

left:0;

height:4px;

width:0;

background:#16C784;

z-index:999999;

transition:.15s;

}

/* Active Navigation */

.navbar a.active{

color:#16C784;

}

/* Back To Top */

.back-top{

position:fixed;

right:35px;

bottom:35px;

width:58px;

height:58px;

border:none;

border-radius:50%;

background:#16C784;

color:white;

font-size:22px;

cursor:pointer;

opacity:0;

visibility:hidden;

transition:.35s;

box-shadow:0 20px 45px rgba(0,0,0,.18);

}

.back-top.show{

opacity:1;

visibility:visible;

}

.back-top:hover{

transform:translateY(-6px);

}

/* Button Shine */

.btn-primary{

position:relative;

overflow:hidden;

}

.btn-primary::before{

content:"";

position:absolute;

top:0;

left:-120%;

width:60%;

height:100%;

background:linear-gradient(

90deg,

transparent,

rgba(255,255,255,.5),

transparent

);

transition:.8s;

}

.btn-primary.shine::before{

left:180%;

}
/* ===========================================================
PREMIUM HOVER EFFECTS
=========================================================== */

.project-card,
.tech-card,
.service-card,
.why-card,
.testimonial-card{

position:relative;
overflow:hidden;

}

.project-card::after,
.tech-card::after,
.service-card::after,
.why-card::after,
.testimonial-card::after{

content:"";

position:absolute;

top:-100%;

left:-100%;

width:220%;

height:220%;

background:

linear-gradient(

45deg,

transparent,

rgba(255,255,255,.18),

transparent

);

transform:rotate(25deg);

transition:1s;

pointer-events:none;

}

.project-card:hover::after,
.tech-card:hover::after,
.service-card:hover::after,
.why-card:hover::after,
.testimonial-card:hover::after{

top:100%;

left:100%;

}

/* ===========================================================
GLASS PANEL
=========================================================== */

.glass{

background:

rgba(255,255,255,.65);

backdrop-filter:blur(30px);

-webkit-backdrop-filter:blur(30px);

border:1px solid rgba(255,255,255,.7);

border-radius:28px;

box-shadow:

0 35px 80px rgba(15,23,42,.12);

}

/* ===========================================================
PREMIUM SECTION SPACING
=========================================================== */

section{

padding:150px 0;

position:relative;

}

.container{

max-width:1280px;

margin:auto;

padding:0 40px;

}

/* ===========================================================
HEADINGS
=========================================================== */

h1{

font-weight:700;

letter-spacing:-3px;

}

h2{

font-weight:700;

letter-spacing:-2px;

margin-bottom:28px;

}

h3{

margin-bottom:18px;

}

p{

font-size:18px;

line-height:1.85;

color:#64748B;

}

/* ===========================================================
PREMIUM SCROLLBAR
=========================================================== */

::-webkit-scrollbar{

width:12px;

}

::-webkit-scrollbar-track{

background:#eef2f7;

}

::-webkit-scrollbar-thumb{

background:#16C784;

border-radius:20px;

}

::-webkit-scrollbar-thumb:hover{

background:#13a86d;

}

/* ===========================================================
IMAGE ZOOM
=========================================================== */

.project-image{

overflow:hidden;

}

.project-image img{

transition:transform .8s ease;

}

.project-card:hover img{

transform:scale(1.08);

}

/* ===========================================================
SECTION DIVIDER
=========================================================== */

section::after{

content:"";

position:absolute;

left:50%;

bottom:0;

transform:translateX(-50%);

width:90%;

height:1px;

background:

linear-gradient(

90deg,

transparent,

rgba(15,23,42,.08),

transparent

);

}

/* ===========================================================
FOOTER IMPROVEMENTS
=========================================================== */

.footer{

position:relative;

overflow:hidden;

}

.footer::before{

content:"";

position:absolute;

width:700px;

height:700px;

border-radius:50%;

background:

rgba(22,199,132,.08);

top:-350px;

right:-250px;

filter:blur(80px);

}

.footer a{

transition:.35s;

}

.footer a:hover{

transform:translateX(6px);

color:#16C784;

}

/* ===========================================================
TEXT SELECTION
=========================================================== */

::selection{

background:#16C784;

color:white;

}
