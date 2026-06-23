// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

//Year
let year = document.querySelector(".year");
year.textContent = `© ${new Date().getFullYear()}`;

// Time
let timeContainer = document.querySelector(".time");
let getTime = () => {
  let hours = String(new Date().getHours()).padStart(2, "0");
  let minutes = String(new Date().getMinutes()).padStart(2, "0");
  let meridiem = null;
  if (0 < hours && hours < 12) {
    meridiem = "AM";
  } else {
    meridiem = "PM";
  }
  return (time = String(`Local: ${hours}:${minutes} ${meridiem} `));
};

let updateTime = () => {
  timeContainer.textContent = getTime();
};

updateTime();
setInterval(updateTime, 30000);

// Menu button functionality

const menuBtn = document.querySelector("#menu");
const overlay = document.querySelector(".overlay");
const overlayElems = document.querySelectorAll(".overlay a");

menuBtn.addEventListener("click", () => {
  overlay.style.transform = "translateY(0rem)";
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  menuBtn.style.transform = "translateY(3rem)";
});

overlayElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(elem.href);
    overlay.style.transform = "translateY(-3rem)";
    menuBtn.style.transform = "translateY(0rem)";
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    setTimeout(() => {
      if (elem.href.includes("#work") == true) {
        document
          .querySelector(elem.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(elem.href, "_blank");
      }
    }, 300);
  });
});

// Footer arrow button functionality

const navArrow = document.querySelectorAll(".arrow-circle");

navArrow.forEach((elem) => {
  elem.addEventListener("click", () => {
    document.querySelector("#work").scrollIntoView({ behavior: "smooth" });
  });
});

// curor pointer

const pointer = document.querySelector(".pointer");
let prevX = 0;
let prevY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (details) => {
  prevX = details.clientX;
  prevY = details.clientY;
});

const animateCursor = () => {
  currentX += (prevX - currentX) * 0.08;
  currentY += (prevY - currentY) * 0.08;
  pointer.style.left = `${currentX}px`;
  pointer.style.top = `${currentY}px`;
  pointer.style.transform = 'translate(-50%, -50%)';

  requestAnimationFrame(animateCursor);
};

animateCursor();

// Pointer at work sectionś
let resetPointer = () => {
  pointer.style.width = "13px";
  pointer.style.height = "13px";
  pointer.textContent = "";
  pointer.style.mixBlendMode = 'difference';
}

let viewPointer = () => {
  pointer.style.width = "6rem";
  pointer.style.height = "6rem";
  pointer.textContent = "VIEW";
  pointer.style.display = "flex";
  pointer.style.alignItems = "center";
  pointer.style.justifyContent = "center";
  pointer.style.mixBlendMode = 'normal';
};

document
  .querySelector(".elem-container")
  .addEventListener("mouseenter", viewPointer);

  document
  .querySelector(".elem-container")
  .addEventListener("mouseleave", () => {
    resetPointer()
  });

// view button functionality

document.querySelectorAll('.elem').forEach(element => {
  element.addEventListener('click', () => {
  window.open(element.getAttribute('href'), '_blank')
})
});