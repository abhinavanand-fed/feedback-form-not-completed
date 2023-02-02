const form = document.getElementById("feedback-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMessage.innerText = "Please fill out all fields.";
    return;
  }

  formMessage.innerText = "Thank you for your feedback!";

  form.reset();
});
