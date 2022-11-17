const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  if (hours < 12) {
    greeting.innerText = `좋은 아침입니다, ${username}!`;
  } else {
    greeting.innerText = `일을 마무리 해봅시다!, ${username}!`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function greetingByTime() {
  if (hours < 12) {
    greeting.innerText = `좋은 아침입니다, ${savedUsername}!`;
  } else {
    greeting.innerText = `일을 마무리 해봅시다!, ${savedUsername}!`;
  }
}
greetingByTime();
