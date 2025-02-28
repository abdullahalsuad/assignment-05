// Background Color Change
console.log("Background ColorChange  js working..");

const root = document.getElementById("root");
const btn = document.getElementById("change-btn");

btn.addEventListener("click", function () {
  const bgColor = randomRgbColor();
  root.style.backgroundColor = bgColor;
});

// Random RGB color function
function randomRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
