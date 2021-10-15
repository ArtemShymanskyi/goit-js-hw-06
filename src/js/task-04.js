

const buttonDecrement= document.querySelector('button[data-action="decrement"]')

const buttonIncrement= document.querySelector('button[data-action="increment"]')

const valueRef = document.querySelector("#value");



let counterValue = 0; 


const decrement = () => {
    counterValue -= 1;
    return (valueRef.textContent = counterValue)
}
const increment = () => {
    counterValue += 1;
    return (valueRef.textContent = counterValue)
}

buttonDecrement.addEventListener("click", decrement)
buttonIncrement.addEventListener("click",increment )