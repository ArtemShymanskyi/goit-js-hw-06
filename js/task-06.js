const inputRef = document.querySelector("#validation-input");
const datasetLength = parseInt(inputRef.dataset.length);

const IsonValidInput = () => {
  if (inputRef.value.length === datasetLength) {
    inputRef.classList.add("valid");
    inputRef.classList.replace("invalid", "valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.replace("valid", "invalid");
  }
};

inputRef.addEventListener("blur", IsonValidInput);