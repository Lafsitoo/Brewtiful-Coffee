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

const products = JSON.parse(localStorage.getItem("products"));
if (!products) {
  localStorage.setItem("products", JSON.stringify(listProducts));
}

const listUsers = [
  {
    id: "faaa4a85-b4bf-4949-99f2-8c64a03a783a",
    name: "El Señor de la Noche",
    email: "admin@admin.com",
    password: "admin",
    province: "Santa Fe",
    role: "ADMIN",
    dateEntry: "2023-08-29",
  },
  {
    id: "84ab41a5-4c6e-417b-9be1-938e37ed255a",
    name: "Juan Pérez",
    email: "juan@gmail.com",
    password: "juan123",
    province: "Buenos Aires",
    role: "CLIENTE",
    dateEntry: "2023-09-01",
  },
  {
    id: "dc526c06-986c-4b3f-b8a9-9e32cd8ff6a9",
    name: "María García",
    email: "maria@gmail.com",
    password: "maria456",
    province: "Córdoba",
    role: "CLIENTE",
    dateEntry: "2023-09-05",
  },
  {
    id: "5f7279ec-8743-4e8d-a905-98d7777b9407",
    name: "Luis Rodríguez",
    email: "luis@gmail.com",
    password: "luis789",
    province: "Mendoza",
    role: "CLIENTE",
    dateEntry: "2023-09-10",
  },
];

const users = JSON.parse(localStorage.getItem("users"));
if (!users) {
  localStorage.setItem("users", JSON.stringify(listUsers));
}
