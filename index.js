const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const angle = document.getElementById("angle");
const size = document.getElementById("size");
const gradient = document.getElementById("gradient");
const copyBtn = document.getElementById("copy-btn");

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
angle.addEventListener("input", updateGradient);
size.addEventListener("input", updateGradient);

function updateGradient() {
  gradient.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
  gradient.style.backgroundSize = `${size.value}%`;
}

copyBtn.addEventListener("click", function () {
  const text = `background-image: ${gradient.style.backgroundImage};\nbackground-size: ${gradient.style.backgroundSize};`;
  navigator.clipboard.writeText(text);
});
