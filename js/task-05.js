const refs = {
  inputEl: document.querySelector("#name-input"),
  titleEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", (event) => {
  refs.titleEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});
