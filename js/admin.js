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
        <td>$${product.price}</td>
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

// Agregar producto
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtén los valores del formulario
  const name = form.elements.name.value;
  const description = form.elements.description.value;
  const price = form.elements.price.value;
  const image = form.elements.image.value;

  // Crea un nuevo producto
  const newProduct = {
    id: crypto.randomUUID(),
    name: name,
    description: description,
    price: price,
    image: image,
    dateEntry: getDate(),
  };

  // Obtiene la lista de productos actual desde el almacenamiento local (localStorage)
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Agrega el nuevo producto a la lista
  products.push(newProduct);

  // Guarda la lista de productos actualizada en el localStorage
  localStorage.setItem("products", JSON.stringify(products));

  // Cierra el modal manualmente
  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.hide();

  // Vuelve a renderizar la lista de productos
  renderProducts(products);

  // Resetea el formulario
  form.reset();
});

// Editar producto
// const editProduct = (id) => {
//   console.log("Sufriendo para editar un producto.");
//   // Encuentra el producto con el ID especificado.
//   const product = products.find((product) => product.id === id);

//   // Abre el modal de edición
//   const editModal = new bootstrap.Modal(document.getElementById("formModal"));
//   editModal.show();

//   // Rellena el formulario con los datos del producto.
//   form.elements.name.value = product.name;
//   form.elements.description.value = product.description;
//   form.elements.price.value = product.price;
//   form.elements.image.value = product.image;
//   form.elements.dateEntry.value = product.dateEntry;

//   // Agrega un event listener al botón "Guardar Cambios"
//   const saveChangesButton = document.getElementById("saveChangesButton");
//   saveChangesButton.addEventListener("click", () => {
//     // Obtén los valores actualizados del formulario
//     const updatedName = form.elements.name.value;
//     const updatedDescription = form.elements.description.value;
//     const updatedPrice = form.elements.price.value;
//     const updatedImage = form.elements.image.value;
//     const updatedDateEntry = form.elements.dateEntry.value;

//     // Actualiza el producto en la lista de productos
//     const updatedProduct = {
//       id: product.id,
//       name: updatedName,
//       description: updatedDescription,
//       price: updatedPrice,
//       image: updatedImage,
//       dateEntry: updatedDateEntry,
//     };

//     // Encuentra y actualiza el producto en la lista
//     const index = products.findIndex((product) => product.id === id);
//     if (index !== -1) {
//       products[index] = updatedProduct;
//     }

//     // Guarda la lista de productos actualizada en el localStorage
//     localStorage.setItem("products", JSON.stringify(products));

//     // Cierra el modal de edición
//     editModal.hide();

//     // Vuelve a renderizar la lista de productos
//     renderProducts(products);
//   });
// };

const deleteProduct = (id) => {
  const confirmation = confirm("¿Seguro que quieres eliminar este producto?");

  if (confirmation) {
    // Encuentra el índice del producto en el array por su ID.
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Elimina el producto del array.
      products.splice(index, 1);

      // Guarda la lista de productos actualizada en el localStorage.
      localStorage.setItem("products", JSON.stringify(products));

      // Vuelve a renderizar la lista de productos sin el producto eliminado.
      renderProducts(products);
    }
  }
};

// Obtener fecha actual
const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
