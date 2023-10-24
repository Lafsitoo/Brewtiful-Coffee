let users = JSON.parse(localStorage.getItem("users"));

const renderUsers = (users) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="text-center align-middle">${user.name}</td>
        <td class="text-center align-middle">${user.email}</td>
        <td class="text-center align-middle">${user.province}</td>
        <td class="text-center align-middle">${user.role}</td>
        <td class="text-center align-middle">${user.dateEntry}</td>
        <td class="align-middle text-center">
        <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-delete btn-sm" onclick="deleteUser('${user.id}')"><img src="/assets/delete-icon.svg" alt="delete-icon"/></button>
        </div>
        </td>
        `;
    tbody.appendChild(tr);
  });
};

renderUsers(users);

const deleteUser = (id) => {
  const confirmDeleteModal = new bootstrap.Modal(
    document.getElementById("confirmDeleteModal")
  );
  confirmDeleteModal.show();

  const confirmDeleteButton = document.getElementById("confirmDeleteButton");
  confirmDeleteButton.addEventListener("click", () => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      users.splice(index, 1);

      localStorage.setItem("users", JSON.stringify(users));

      renderUsers(users);
    }

    confirmDeleteModal.hide();
  });
};
