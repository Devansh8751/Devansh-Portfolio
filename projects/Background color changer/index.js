function changeColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

let b = document.querySelector(".colorBtn");

b.addEventListener("click", changeColor);
