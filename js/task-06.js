const inputEl = document.getElementById("validation-input");

const blurListener = () => {
  const valueLength = inputEl.value.length;
  const maxLength = +inputEl.dataset.length;

  if (valueLength === maxLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", blurListener);
