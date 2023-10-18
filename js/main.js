document.addEventListener("DOMContentLoaded", function () {
  const products = JSON.parse(localStorage.getItem("products"));
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col";
    productCard.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="title-card">${product.name}</h5>
          <p class="subtitle-card">${product.description}</p>
          <h6 class="card-text">Precio: ${product.price}</h6>
          <hr />
          <div class="d-flex justify-content-evenly">
            <a href="#" class="read-more-button btn btn-primary btn-lg">Ver más</a>
            <a href="#" class="buy-now-button btn btn-success btn-lg">Comprar</a>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-date">Ingresado el: ${product.dateEntry}</small>
        </div>
      </div>
    `;

    productContainer.appendChild(productCard);
  });
});
