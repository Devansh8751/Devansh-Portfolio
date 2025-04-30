let H = document.querySelector("#Eheight");
let R = document.querySelector("#Eradius");
let T = document.querySelector("#Ethickness");
let C = document.querySelector(".confirm");
let V = document.querySelector(".value");

function result() {
  let T2 = Number(T.value);
  let H2 = Number(H.value);
  let R2 = Number(R.value);
  let r = R2 - T2;
  let Res =
    ((2 * 22) / 7) * R2 * H2 +
    ((2 * 22) / 7) * r * H2 +
    ((2 * 22) / 7) * (R2 ** 2 - r ** 2);
  V.innerText = Res;
}

C.addEventListener("click", result);
