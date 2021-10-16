const inputRef = document.querySelector("#validation-input");

const IsonValidInput = () => {
  if (inputRef.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.replace("invalid", "valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.replace("valid", "invalid");
  }
};

inputRef.addEventListener("blur", IsonValidInput);