const inputRef = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

const onInputClick = () => {
textInput.style.fontSize = `${inputRef.value}px`;
};
inputRef.addEventListener('input', onInputClick)