const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("questioncard__bookmark--active");
});
const antwort = document.querySelector('[data-js="antwort"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const showAnswerText = document.querySelector(
  '[data-js="showAnswerButtonText"]'
);
showAnswerButton.addEventListener("click", () => {
  antwort.toggleAttribute("hidden");
  if (showAnswerText.textContent === "Show answer") {
    showAnswerText.textContent = "Hide answer";
  } else {
    showAnswerText.textContent = "Show answer";
  }
});
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  console.log(formData);
});
