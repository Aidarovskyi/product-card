// // Задание 4

const emailForm = document.getElementById('email-form');

if (emailForm) {
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = emailForm.elements['email'];
    const emailValue = emailInput.value.trim();

if (!emailValue) {
      alert('Пожалуйста, введите email');
      return;
 }
if (!emailInput.checkValidity()) {
      alert('Введите корректный адрес электронной почты');
      return;
 }
    const formData = {
      email: emailValue
 };
    console.log(formData);
    emailForm.reset();
 });
}

// // Задание 5

const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  overlay.classList.add('modal-showed');
  document.body.style.overflow = 'hidden';
});

const closeModal = () => {
  overlay.classList.remove('modal-showed');
  document.body.style.overflow = '';
};

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeModal();
  }
});

// Задание 6

const modal = document.getElementById("myModal");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("registrationForm");
const errorMessage = document.getElementById("errorMessage");
let user = {};

function openModal() {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
}

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
  form.reset(); 
  errorMessage.textContent = ""; 
  form.classList.remove("was-validated"); 
}

btn.onclick = openModal;

span.onclick = closeModal;

overlay.onclick = closeModal;

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    errorMessage.textContent =
      "Пароли не совпадают. Пожалуйста, проверьте ввод.";
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("confirmPassword").classList.add("is-invalid");
    return; 
  } else {
    document.getElementById("password").classList.remove("is-invalid");
    document.getElementById("confirmPassword").classList.remove("is-invalid");
  }
  if (!form.checkValidity()) {
    errorMessage.textContent =
      "Форма заполнена некорректно. Пожалуйста, проверьте все поля.";
    form.classList.add("was-validated"); 
    return; 
  }
  errorMessage.textContent = ""; 
  form.classList.remove("was-validated"); 
  user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    birthDate: document.getElementById("birthDate").value,
    username: document.getElementById("username").value,
    password: password,
    createdOn: new Date(), 
  };
  console.log("Данные пользователя:", user);
  closeModal();
});
