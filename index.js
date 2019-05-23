const problem = document.querySelector(".problem");
const toForm = document.querySelector(".gugudan__input");
const inputValue = toForm.getElementById("input");

const x = Math.ceil(Math.random() * 9) + 1;
const y = Math.ceil(Math.random() * 9) + 1;
const answer = inputValue.value;
const rightAnswer = x * y;
problem.innerText = `${x}X${y}`;

function handleSubmit() {
  console.log(answer, rightAnswer);
}

function init() {
  inputValue.addes;
}

init();
