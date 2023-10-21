let products = JSON.parse(localStorage.getItem("products"));

const renderProducts = (products) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  products.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="text-center align-middle"><img src="${product.image}" alt="${product.name}" class="image-product" /></td>
        <td class="text-center align-middle">${product.name}</td>
        <td class="text-center col-md-4 align-middle">${product.description}</td>
        <td class="text-center align-middle">$${product.price}</td>
        <td class="text-center align-middle">${product.dateEntry}</td>
        <td class="align-middle text-center">
        <div class="d-flex justify-content-center gap-3">
        <button class="btn-edit btn-sm" onclick="editProduct('${product.id}')"><img src="/assets/edit-icon.svg" alt="edit-icon"/></button>
        <button class="btn btn-delete btn-sm" onclick="deleteProduct('${product.id}')"><img src="/assets/delete-icon.svg" alt="delete-icon"/></button>
        </div>
        </td>
        `;
    tbody.appendChild(tr);
  });
};

renderProducts(products);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements.name.value;
  const description = form.elements.description.value;
  const price = form.elements.price.value;
  const image = form.elements.image.value;

  const newProduct = {
    id: crypto.randomUUID(),
    name: name,
    description: description,
    price: price,
    image: image,
    dateEntry: getDate(),
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.hide();

  renderProducts(products);

  form.reset();
});

const editProduct = (id) => {
  const product = products.find((product) => product.id === id);

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "editModal";
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "editModalLabel");
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Editar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="editForm">
            <div class="form-group">
              <label for="editName">Nombre:</label>
              <input type="text" class="form-control" id="editName" value="${product.name}" required>
            </div>
            <div class="form-group">
              <label for="editDescription">Descripción:</label>
              <textarea class="form-control" id="editDescription" required>${product.description}</textarea>
            </div>
            <div class="form-group">
              <label for="editPrice">Precio:</label>
              <input type="number" class="form-control" id="editPrice" value="${product.price}" required>
            </div>
            <div class="form-group">
              <label for="editImage">Imagen:</label>
              <input type="url" class="form-control" id="editImage" value="${product.image}" required>
            </div>
            <input type="hidden" id="productId" value="${id}">
          </form>
        </div>
        <div class="d-grid m-3">
          <button type="button" class="btn btn-primary" onclick="saveEditedProduct()" data-bs-dismiss="modal">Guardar Cambios</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const editModal = new bootstrap.Modal(modal);
  editModal.show();
};

const saveEditedProduct = () => {
  const updatedName = document.getElementById("editName").value;
  const updatedDescription = document.getElementById("editDescription").value;
  const updatedPrice = document.getElementById("editPrice").value;
  const updatedImage = document.getElementById("editImage").value;
  const productId = document.getElementById("productId").value;

  const updatedProduct = {
    id: productId,
    name: updatedName,
    description: updatedDescription,
    price: updatedPrice,
    image: updatedImage,
    dateEntry: getDate(),
  };

  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products[index] = updatedProduct;
  }

  localStorage.setItem("products", JSON.stringify(products));

  const editModal = new bootstrap.Modal(document.getElementById("editModal"));
  editModal.hide();

  renderProducts(products);
};

const deleteProduct = (id) => {
  const confirmDeleteModal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
  confirmDeleteModal.show();

  const confirmDeleteButton = document.getElementById("confirmDeleteButton");
  confirmDeleteButton.addEventListener("click", () => {
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      products.splice(index, 1);

      localStorage.setItem("products", JSON.stringify(products));

      renderProducts(products);
    }

    confirmDeleteModal.hide();
  });
};


const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
