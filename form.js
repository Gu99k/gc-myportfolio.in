//  menubar
const menuBar = document.querySelector("#menubar");
const menuItem = document.querySelector("#menu-sidebar");
const menuBarClose = document.querySelector("#menubar-close");
let navLinks = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  menuItem.style.bottom = "0";
  menuBar.style.display = "none";
  menuBarClose.style.display = "block";
});

menuBarClose.addEventListener("click", () => {
  menuItem.style.bottom = "485px";
  menuBar.style.display = "block";
  menuBarClose.style.display = "none";
});

// ============ when click hover stay on that perticular elemrnts======================================
let listLink = document.querySelector(".list-link");
let activeLink = listLink.querySelectorAll(".active-link");

for (let i = 0; i < activeLink.length; i++) {
  activeLink[i].addEventListener("click", () => {
    let current = activeLink[i].classList.add("active-current");
    if (current.length > 0) {
      current[0].className = current[0].className.replaceAll(
        " active-current",
        ""
      );
    } else {
      this.className += " active-current";
    }
  });
}

// animation text changing js code
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    string: [
      "Youtuber",
      "Web Developer",
      "Programmer",
      "UI UX Developer",
      "Full Stack Developer",
    ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  };
  const multiTextElement = document.querySelector(".multi-text");
  let currentTextIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const fullText = options.string[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;
    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 1;
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.string.length;
    }
    setTimeout(type, typeSpeed);
  }
  type();
});
// ===============Working contact form ===========================================
const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");
const submitForm = document.querySelector("#myform");

function sendEmail() {
  const bodyMessage = `Name : ${Name.value} <br> Email : ${email.value} <br> Contact : ${number.value} <br> Message : ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ravi986745@gmail.com",
    Password: "EC2D6EA9294782FDA495799AE923AF11EC30",
    To: "ravi986745@gmail.com",
    From: "ravi986745@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}
function checkInput() {
  const items = document.querySelectorAll(".input-data");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  if (
    !Name.classList.contains("error") &&
    !email.classList.contains("error") &&
    !number.classList.contains("error") &&
    !message.classList.contains("error") &&
    !subject.classList.contains("error")
  ) {
    sendEmail();
    submitForm.reset();
    return false;
  }
});

// video auto play and pause in portfolio section

let cardVideo = document.querySelectorAll(".cards-img");

cardVideo.forEach(function (elem) {
  elem.addEventListener("mouseenter", () => {
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].play();
  });
  elem.addEventListener("mouseleave", () => {
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();
  });
});

// scrolling animation All section

let sections = document.querySelectorAll("section");

sections.forEach((section) => {
  window.addEventListener("load", eventListener);
  window.addEventListener("scroll", eventListener);

  function eventListener() {
    let windowHeight = window.innerHeight;
    let sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight) {
      section.classList.add("active");
    }
  }
});

// ================================== scrollReveal javascript library---------------------------------------
ScrollReveal({
  // reset: true,
  distance: "90px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".title1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".description", { delay: 300, origin: "right" });
ScrollReveal().reveal(".design", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".blog-H-h1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".blog-H-p", { delay: 300, origin: "right" });
ScrollReveal().reveal(".service-Hd-h1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".service-Hd-p", { delay: 300, origin: "right" });
ScrollReveal().reveal(".port-h-s h1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".port-h-s p", { delay: 300, origin: "right" });
ScrollReveal().reveal(".services-expo .expo", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".contact-header", { delay: 300, origin: "left" });
ScrollReveal().reveal(".contact-form", { delay: 300, origin: "right" });

ScrollReveal().reveal(".social-media2 a", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});

// slide screen of main page-----------------------------------------------------------------------------------------------------
let screenSlide = document.querySelector(".hero");
let screen2Slide = document.querySelector(".animate-ball");

const bgColor = () => {
  setTimeout(() => {
    screenSlide.style.background =
      "linear-gradient(180deg, " + "#e11f1f" + ", " + "#e6cd11" + ")";
  }, 0);
  setTimeout(() => {
    screenSlide.style.background =
      "linear-gradient(180deg, " + "#e11f1f" + ", " + "#e6cd11" + ")";
    screen2Slide.style.background =
      "linear-gradient(180deg, " + "#e11f1f" + ", " + "#e6cd11" + ")";
  }, 4000);
  setTimeout(() => {
    screenSlide.style.background =
      "linear-gradient(180deg, " + "#e11f1f" + ", " + "#12e611" + ")";
    screen2Slide.style.background =
      "linear-gradient(180deg, " + "#3c1fe1" + ", " + "#e6cd11" + ")";
  }, 8000);

  setTimeout(() => {
    screenSlide.style.background =
      "linear-gradient(180deg, " + "#3c1fe1" + ", " + "#e6cd11" + ")";
    screen2Slide.style.background =
      "linear-gradient(180deg, " + "#3c1fe1" + ", " + "#e6cd11" + ")";
  }, 12000);
  setTimeout(() => {
    screen2Slide.style.background =
      "linear-gradient(180deg, " + "#e11f1f" + ", " + "#e6cd11" + ")";
  }, 16000);
  setTimeout(() => {
    screen2Slide.style.background =
      "linear-gradient(180deg, " + "#3c1fe1" + ", " + "#e6cd11" + ")";
  }, 20000);
};

bgColor();
setInterval(bgColor, 24000);
