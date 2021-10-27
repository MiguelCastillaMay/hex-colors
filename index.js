const colorBtn = document.getElementById("color-btn");
const hexcolorEl = document.getElementById("hexcolor-el");

colorBtn.addEventListener("click", () => {
  randomColor();
});

function randomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length == 6) {
    document.body.style.backgroundColor = "#" + randomColor;
    hexcolorEl.textContent = "this color is #" + randomColor;
  } else {
    randomColor();
  }
}
