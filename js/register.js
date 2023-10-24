document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("floatingInputUsername").value;
    const email = document.getElementById("floatingInputEmail").value;
    const password = document.getElementById("floatingPassword").value;
    const confirmPassword = document.getElementById(
      "floatingPasswordConfirm"
    ).value;
    const dateEntry = document.getElementById("floatingDate").value;
    const province = document.getElementById("floatingProvince").value;
    const observations = document.getElementById("observations").value;

    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    const users = JSON.parse(localStorage.getItem("users"));
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      emailError.textContent = "Este correo electrónico ya está registrado.";
      document.getElementById("floatingInputEmail").focus();
      return;
    }

    if (password !== confirmPassword) {
      passwordError.textContent = "Las contraseñas no coinciden.";
      document.getElementById("floatingPasswordConfirm").focus();
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      dateEntry,
      province,
      observations,
      role: "CLIENTE",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    confirmationModal.show();
    setTimeout(() => {
      window.location.href = "/pages/login.html";
    }, 2000);
  });
});
