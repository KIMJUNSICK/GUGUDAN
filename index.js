const problem = document.querySelector(".problem");
const toForm = document.querySelector(".gugudan__input");
const input = toForm.querySelector("#inputJs");
const btn = toForm.querySelector("#btnJs");

let result = document.querySelector(".result");

let x = Math.ceil(Math.random() * 9) + 1;
let y = Math.ceil(Math.random() * 9) + 1;
let rightAnswer = x * y;

problem.innerText = `${x}X${y}`;

function handleSubmit(event) {
  event.preventDefault();
  if (Number(input.value) === rightAnswer) {
    x = Math.ceil(Math.random() * 9) + 1;
    y = Math.ceil(Math.random() * 9) + 1;
    rightAnswer = x * y;
    problem.innerText = `${x}X${y}`;
    result.innerText = "good, dude";
    input.focus();
    input.value = "";
  } else {
    result.innerText = "foolish";
    input.focus();
    input.value = "";
  }
}

function init() {
  toForm.addEventListener("submit", handleSubmit);
}

init();
