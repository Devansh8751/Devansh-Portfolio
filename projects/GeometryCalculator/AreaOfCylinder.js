let H = document.querySelector("#Eheight");
let R = document.querySelector("#Eradius");
let C = document.querySelector(".confirm");
let V = document.querySelector(".value");

function result() {
  let H2 = Number(H.value);
  let R2 = Number(R.value);
  let Res = (22 / 7) * R2 ** 2 * H2;
  V.innerText = Res;
}

C.addEventListener("click", result);
