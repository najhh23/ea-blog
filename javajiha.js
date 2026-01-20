document.addEventListener("DOMContentLoaded", () => {

  function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    document.getElementById("datetime").textContent = `${date} ${time}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

  const toggle = document.getElementById("modeToggle");
  const icon = document.getElementById("modeIcon");

  if (!toggle || !icon) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    icon.src = document.body.classList.contains("dark-mode")
      ? "light.png"
      : "dark.png";
  });

});

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 2000); 







