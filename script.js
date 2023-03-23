const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("questioncard__bookmark--active");
});
const antwort = document.querySelector('[data-js="antwort"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
showAnswerButton.addEventListener("click", () => {
  antwort.removeAttribute("hidden");
});
