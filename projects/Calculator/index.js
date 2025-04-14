let inpt1 = document.querySelector(".input1");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let inpt3 = document.querySelector(".input3");
let result = document.querySelector(".result");
let b = document.querySelector(".button");

function A() {
  inp1 = Number(inpt1.value);
  inp3 = Number(inpt3.value);
  let ad = inp1 + inp3;
  result.innerText = ad;
}

function S() {
  inp1 = Number(inpt1.value);
  inp3 = Number(inpt3.value);
  let sub = inp1 - inp3;
  result.innerText = sub;
}

function M() {
  inp1 = Number(inpt1.value);
  inp3 = Number(inpt3.value);
  let mul = inp1 * inp3;
  result.innerText = mul;
}

function D() {
  inp1 = Number(inpt1.value);
  inp3 = Number(inpt3.value);
  let div = inp1 / inp3;
  result.innerText = div;
}

add.addEventListener("click", A);
subtract.addEventListener("click", S);
multiply.addEventListener("click", M);
divide.addEventListener("click", D);
