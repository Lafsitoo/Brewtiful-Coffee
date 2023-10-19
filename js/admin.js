const products = JSON.parse(localStorage.getItem("products"));

// renderer productos en la tabla
const renderProducts = (products) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  products.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td><img src="${product.image}" alt="${product.name}" class="image-product" /></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.dateEntry}</td>
        <td>
        <button class="btn btn-edit btn-sm" onclick="editProduct('${product.id}')"><img src="/assets/edit-icon.svg" alt="edit-icon"/></button>
        <button class="btn btn-delete btn-sm" onclick="deleteProduct('${product.id}')"><img src="/assets/delete-icon.svg" alt="delete-icon"/></button>
        </td>
        `;
    tbody.appendChild(tr);
  });
};

renderProducts(products);

const addProduct = () => {
  const name = document.querySelector("#name").value;
  const image = document.querySelector("#image").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  const dateEntry = document.querySelector("#dateEntry").value;

  const requiredFields = [name, image, description, price, dateEntry];
  if (requiredFields.some((field) => !field)) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const updatedProduct = {
    id: crypto.randomUUID(), // Genera un nuevo ID
    name,
    image,
    description,
    price,
    dateEntry,
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(updatedProduct);
  localStorage.setItem("products", JSON.stringify(products));

  // Cierra el modal de edición (si estuviera abierto)
  const editModal = new bootstrap.Modal(document.getElementById("formModal"));
  editModal.hide();

  // Vuelve a renderizar la lista de productos
  renderProducts(products);
};


// Editar producto
const editProduct = (id) => {
  console.log("Sufriendo para editar un producto.");
  // Encuentra el producto con el ID especificado.
  const product = products.find((product) => product.id === id);

  // Abre el modal de edición
  const editModal = new bootstrap.Modal(document.getElementById("formModal"));
  editModal.show();

  // Rellena el formulario con los datos del producto.
  form.elements.name.value = product.name;
  form.elements.description.value = product.description;
  form.elements.price.value = product.price;
  form.elements.image.value = product.image;
  form.elements.dateEntry.value = product.dateEntry;

  // Agrega un event listener al botón "Guardar Cambios"
  const saveChangesButton = document.getElementById("saveChangesButton");
  saveChangesButton.addEventListener("click", () => {
    // Obtén los valores actualizados del formulario
    const updatedName = form.elements.name.value;
    const updatedDescription = form.elements.description.value;
    const updatedPrice = form.elements.price.value;
    const updatedImage = form.elements.image.value;
    const updatedDateEntry = form.elements.dateEntry.value;

    // Actualiza el producto en la lista de productos
    const updatedProduct = {
      id: product.id,
      name: updatedName,
      description: updatedDescription,
      price: updatedPrice,
      image: updatedImage,
      dateEntry: updatedDateEntry,
    };

    // Encuentra y actualiza el producto en la lista
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = updatedProduct;
    }

    // Guarda la lista de productos actualizada en el localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Cierra el modal de edición
    editModal.hide();

    // Vuelve a renderizar la lista de productos
    renderProducts(products);
  });
};
