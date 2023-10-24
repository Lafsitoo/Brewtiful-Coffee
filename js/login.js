let users = JSON.parse(localStorage.getItem("users"));

const form = document.querySelector("#form-login");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#floatingInputEmail").value;
  const password = document.querySelector("#floatingPassword").value;

  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/index.html";
  } else {
    if (!user || user.email !== email) {
      emailError.textContent = "Usuario no encontrado.";
    }
    if (!user || user.password !== password) {
      passwordError.textContent = "Contraseña incorrecta.";
    }
  }
});


const authenticatedUser = (user) => ({
  name: user.name,
});

localStorage.setItem("user", JSON.stringify(authenticatedUser));
