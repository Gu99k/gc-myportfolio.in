//  Card Mouse hover ---------------------------------------------------------------///////////////////

const hoverSections = document.querySelectorAll(".block-2");
const layoutOnes = document.querySelectorAll(".overlay");
let actionButtons = document.querySelectorAll(".btn-p-exp");

hoverSections.forEach((hoverSection, index) => {
  hoverSection.addEventListener("mouseenter", () => {
    if (layoutOnes[index]) {
      layoutOnes[index].style.opacity = 1;
      layoutOnes[index].style.transition = "opacity 0.5s ease";
      layoutOnes[index].style.visibility = "visible";
    }

    if (actionButtons[index]) {
      actionButtons[index].style.opacity = 1;
      actionButtons[index].style.top = "155px";
    }
  });
  hoverSection.addEventListener("mouseleave", () => {
    if (actionButtons[index]) {
      actionButtons[index].style.opacity = 0;
      actionButtons[index].style.top = "0";
    }
    if (layoutOnes[index]) {
      layoutOnes[index].style.opacity = 0;
    }
  });
});

// ================================== scrollReveal javascript library---------------------------------------
ScrollReveal({
  reset: true,
  distance: "90px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".block-1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".block-2", { delay: 300, origin: "right" });
