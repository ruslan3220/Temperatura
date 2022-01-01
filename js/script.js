let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormInputLast = document.querySelector(".form__input-last");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  let exem = (inputValue * (9 / 5) + 32).toFixed(2);

  elFormInputLast.textContent = `${exem}`;
});
