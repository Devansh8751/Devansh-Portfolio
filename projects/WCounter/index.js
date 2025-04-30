let input = document.querySelector(".textarea");
let word = document.querySelector(".word");
let btn = document.querySelector(".button");

function gin() {
  let text = input.value.trim();
  let words;
  if (text === "") {
    words = 0;
  } else {
    words = text.split(/\s+/).length;
  }

  word.innerText = words;
}

btn.addEventListener("click", gin);
