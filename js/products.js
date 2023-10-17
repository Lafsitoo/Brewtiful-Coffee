const listProducts = [
  {
    id: "a1b72b69-6af7-48e2-9a3b-26dba6693008",
    name: "Frappé de mazapán",
    image: "/assets/images/frappe-mazapán.jpg",
    description:
      "Frappe cremoso y delicioso con mazapán, leche condensada y caramelo.",
    price: "$1800",
    dateEntry: "2023-08-29",
  },
  {
    id: "59448ed7-a4ee-4a6b-b4b4-073b34450ca1",
    name: "Crema cúrcuma",
    image: "/assets/images/crema-cúrcuma.jpg",
    description:
      "Crema dulce y cremosa con un delicioso sabor a cúrcuma, caramelo y chocolate.",
    price: "$2000",
    dateEntry: "2023-08-19",
  },
  {
    id: "283ab302-d903-403e-9374-c0d4467def8e",
    name: "Triffle de chocolate",
    image: "/assets/images/triffle-chocolate.jpg",
    description:
      "Postre con capas de bizcocho de chocolate, crema de dulce de leche y chocolate fundido.",
    price: "$1700",
    dateEntry: "2023-07-15",
  },
  {
    id: "e3842c57-7409-439d-b190-bc6004c5f97d",
    name: "Moccaccino",
    image: "/assets/images/moccaccino.jpg",
    description:
      "Café con leche con chocolate fundido, crema batida y chocolate rallado.",
    price: "$1500",
    dateEntry: "2023-06-09",
  },
];

// Convierte la lista de productos en una cadena JSON
const productsJSON = JSON.stringify(listProducts);

// Guarda la cadena JSON en el localStorage con una clave específica, por ejemplo, "products"
localStorage.setItem("products", productsJSON);
