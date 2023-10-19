const listProducts = [
  {
    id: "a1b72b69-6af7-48e2-9a3b-26dba6693008",
    name: "Frappé de mazapán",
    image: "/assets/images/frappe-mazapán.jpg",
    description:
      "Frappe cremoso y delicioso con mazapán, leche condensada y caramelo.",
    price: "1800",
    dateEntry: "2023-08-29",
  },
  {
    id: "59448ed7-a4ee-4a6b-b4b4-073b34450ca1",
    name: "Crema cúrcuma",
    image: "/assets/images/crema-cúrcuma.jpg",
    description:
      "Crema dulce y cremosa con un delicioso sabor a cúrcuma, caramelo y chocolate.",
    price: "2000",
    dateEntry: "2023-08-19",
  },
  {
    id: "283ab302-d903-403e-9374-c0d4467def8e",
    name: "Triffle de chocolate",
    image: "/assets/images/triffle-chocolate.jpg",
    description:
      "Postre con capas de bizcocho de chocolate, crema de dulce de leche y chocolate fundido.",
    price: "1700",
    dateEntry: "2023-07-15",
  },
  {
    id: "e3842c57-7409-439d-b190-bc6004c5f97d",
    name: "Moccaccino",
    image: "/assets/images/moccaccino.jpg",
    description:
      "Café con leche con chocolate fundido, crema batida y chocolate rallado.",
    price: "1500",
    dateEntry: "2023-06-09",
  },
  {
    id: "cfa5fc00-3624-48a1-8f64-c09de17a0adb",
    name: "Matcha green",
    image: "/assets/images/matcha-green.jpg",
    description:
      "Té verde en polvo con un sabor intenso y aromático, rico en antioxidantes y vitaminas.",
    price: "1400",
    dateEntry: "2023-06-01",
  },
  {
    id: "95815fb4-ab09-4c47-bed7-e2c0fa13fa7f",
    name: "Latte",
    image: "/assets/images/latte.jpg",
    description:
      "Bebida de café con leche vaporizada y espuma de leche, con un sabor suave y equilibrado.",
    price: "1500",
    dateEntry: "2023-05-11",
  },
  {
    id: "0b4d800d-6299-49a6-a432-1736f0773f5a",
    name: "Capuchino",
    image: "/assets/images/capuchino.jpg",
    description:
      "Bebida de café con espresso, leche vaporizada y espuma de leche, con un sabor rico y cremoso.",
    price: "1450",
    dateEntry: "2023-04-21",
  },
  {
    id: "048e1efd-a1b1-4119-b353-aa49eb2ebb0f",
    name: "Expreso",
    image: "/assets/images/expreso.jpg",
    description:
      "Bebida de café concentrada con un sabor intenso y aromático, ideal para despertar o recargar energías.",
    price: "1300",
    dateEntry: "2023-04-09",
  },
];

const productsJSON = JSON.stringify(listProducts);

localStorage.setItem("products", productsJSON);
