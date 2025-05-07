let w = document.querySelector(".weight");
let h = document.querySelector(".height");
let b = document.querySelector(".button");
let r = document.querySelector(".result");
let t = document.querySelector(".type");
let darkBtn = document.querySelector(".dark-btn");
let lightBtn = document.querySelector(".light-btn");
let body = document.body;

function check() {
  let W = Number(w.value);
  let H = Number(h.value);
  let R = W / (((H / 100) * H) / 100);
  r.innerText = `BMI: ${R.toFixed(2)}`;

  if (R < 18.5) {
    t.innerText = "You are underweight";
  } else if (R >= 18.5 && R <= 24.9) {
    t.innerText = "You are healthy";
  } else if (R >= 25 && R <= 29.9) {
    t.innerText = "You are overweight";
  } else {
    t.innerText = "You are obese";
  }
}

b.addEventListener("click", check);

function dark() {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
}

darkBtn.addEventListener("click", dark);

function light() {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
}

lightBtn.addEventListener("click", light);
