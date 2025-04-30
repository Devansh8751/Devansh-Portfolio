let q1a = document.querySelector(".Que1A");
let q1b = document.querySelector(".Que1B");
let B = document.querySelector(".button");

function check() {
  let Q1A = q1a.value;
  let Q1B = q1b.value;
  let Q1AA = "10";
  let Q1BA = "8";
  if (Q1B == Q1BA) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}

B.addEventListener("click", check);

const array = [1, 2, 3, 4, 5];
console.log(...array[0]);
