
const form = document.querySelector(".login-form");



const handleSubmit = (event) => {
    event.preventDefault();
    if (
      event.currentTarget.elements.email.value === '' ||
      event.currentTarget.elements.password.value === ''
    )
      return alert('все поля должны быть заполнены.');
    const dataFormResult = {};
    const formData = new FormData(event.currentTarget);
  
    formData.forEach((value, name) => {
      dataFormResult[name] = value;
    });
  
    console.log(dataFormResult);
    loginForm.reset();
}

  form.addEventListener("submit", handleSubmit);