function getAuthenticatedUser() {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
}
function displayUserName() {
  const userCurrent = getAuthenticatedUser();
  if (userCurrent) {
    const userNameElement = document.getElementById("user-name");
    userNameElement.textContent = userCurrent.name;
  }
}
displayUserName();

const navbarList = document.querySelector(".navbar-nav");
const specialItems = document.querySelectorAll(".nav-item-special");

function addNavbarItem(text, href) {
  const li = document.createElement("li");
  li.classList.add("nav-item");

  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = href;
  a.textContent = text;

  li.appendChild(a);
  navbarList.insertBefore(li, specialItems[0]);
}

const userCurrent = getAuthenticatedUser();

if (userCurrent) {
  if (userCurrent.role === "ADMIN") {
    addNavbarItem("Productos", "/pages/admin.html");
    addNavbarItem("Usuarios", "/pages/users.html");
  }
}

const userIcon = document.getElementById("user-icon");
const logoutButton = document.getElementById("logout-button");

if (userCurrent) {
  userIcon.src = "/assets/login-icon.svg";
  logoutButton.href = "#";
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    window.location.href = "/index.html";
  });
} else {
  userIcon.src = "assets/user.svg";
  logoutButton.href = "/pages/login.html";
}