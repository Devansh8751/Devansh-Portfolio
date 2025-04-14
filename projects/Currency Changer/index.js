let inpt = document.querySelector(".input");
let select = document.querySelector(".select");
let res = document.querySelector(".result");
let b = document.querySelector(".button");

function convert() {
  let inp = Number(inpt.value);
  let sel = select.value;

  if (sel === "UAE") {
    let dinar = inp * 279.1883;
    res.innerText = dinar + "INR";
  } else if (sel === "US") {
    let dollar = inp * 86;
    res.innerText = dollar + "INR";
  } else if (sel === "Euro") {
    let euro = inp * 92;
    res.innerText = euro + "INR";
  }
}

b.addEventListener("click", convert);
