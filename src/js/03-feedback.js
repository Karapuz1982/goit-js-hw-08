import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};


const throttledSaveFormData = throttle(saveFormData, 500); // Використовуємо throttle для обмеження частоти оновлення

form.addEventListener('input', () => {
  throttledSaveFormData();
});


document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});


const clearFormData = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });
  clearFormData();
});
