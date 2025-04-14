console.log("Hello");
let InputOne = document.querySelector(".InputOne");
let InputTwo = document.querySelector(".InputTwo");
let InputThree = document.querySelector(".InputThree");
let b = document.querySelector(".button");
let p = document.querySelector(".para");

function check() {
  let IOne = Number(InputOne.value);
  let ITwo = Number(InputTwo.value);
  let IThree = Number(InputThree.value);
  let sum = IOne + ITwo + IThree;

  if (sum != 180 || IOne == 0 || ITwo == 0 || IThree == 0) {
    p.innerText = "These angles dosen't form any triangle";
  } else if (IOne == 90 || ITwo == 90 || IThree == 90) {
    p.innerText = "Right Angled";
  } else if (IOne == 60 || ITwo == 60 || IThree == 60) {
    p.innerText = "Equilateral";
  } else if (IOne == ITwo || ITwo == IThree || IThree == IOne) {
    p.innerText = "Isosceles";
  } else {
    p.innerText = "scalene";
  }
}

b.addEventListener("click", check);
