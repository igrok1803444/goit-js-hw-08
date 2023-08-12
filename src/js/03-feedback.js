//імпорт модулів
import throttle from "lodash.throttle";
//пошук елементів
const form = document.querySelector('.feedback-form');
//слухачі подій
form.addEventListener('input', throttle(setFormDataInLocalStorage, 500));
form.addEventListener('submit', resetFormAndLocalStorage);
document.addEventListener('DOMContentLoaded', getFormDataFromLocalStorage);
//об'єкт з данними форми
  const formData = { }
//функція для слухачів подів
function setFormDataInLocalStorage() {
    formData.email = this.email.value;
    formData.message = this.message.value;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
function getFormDataFromLocalStorage() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData === "") {
       form.reset();
    } else {
        
         form.email.value = savedFormData.email.trim();
        form.message.value = savedFormData.message.trim();
    }
};
function resetFormAndLocalStorage(event) {
    event.preventDefault();
       formData.email = this.email.value;
    formData.message = this.message.value;
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
}

