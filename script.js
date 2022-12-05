const form = document.querySelector(".calculatrice");
const resultat = document.querySelector(".resultat");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target.first_number.value);
  console.log(e.target.operator.value);
  console.log(e.target.second_number.value);

  resultat.innerHTML = "Le resultat est : " + 
  eval(
    e.target.first_number.value +
      e.target.operator.value +
      e.target.second_number.value
  ) + " &#128540"
});

const btn = document.querySelector(".visible");
const btn1 = document.querySelector(".none");
console.log(btn);
console.log(btn1);

btn.addEventListener("click", () => {
  form.style.visibility = "visible";
});

btn1.addEventListener("click", () => {
  form.style.visibility = "hidden";
});

const number = document.querySelector("#number");
const operator = document.querySelector("#operator");
const number1 = document.querySelector("#number1");
const comment = document.querySelector(".com");

console.log(number);
console.log(operator);
console.log(number1);
console.log(comment);

number.addEventListener("mouseenter", () => {
  comment.textContent = "Saisir un chiffre";
});

number.addEventListener("mouseleave", () => {
  comment.textContent = "";
});

operator.addEventListener("mouseenter", () => {
  comment.textContent = "Selectionner un opérateur : + - * /% ";
});

operator.addEventListener("mouseleave", () => {
  comment.textContent = "";
});

number1.addEventListener("mouseenter", () => {
  comment.textContent = "Saisir un chiffre";
});

number1.addEventListener("mouseleave", () => {
  comment.textContent = "";
});
