let H = document.querySelector("#Eheight");
let B = document.querySelector("#Ebase");
let C = document.querySelector(".confirm");
let V = document.querySelector(".value");

function result() {
  let H2 = Number(H.value);
  let B2 = Number(B.value);
  let Res = (1 / 2) * H2 * B2;
  V.innerText = Res;
}

C.addEventListener("click", result);
