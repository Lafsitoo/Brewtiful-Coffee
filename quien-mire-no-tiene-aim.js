const precioEntrada = 4000;
const descuentoMenorEdad = 40;
const descuentoAdolescente = 20;
const descuentoJubilado = 70;
let totalAbonar = 0;

const leer = (edad) => {
  if (edad < 16) {
    totalAbonar = precioEntrada - (precioEntrada * descuentoMenorEdad) / 100;
    return `El precio de la entrada es de $${totalAbonar}`;
  } else if (edad >= 6 && edad <= 18) {
    totalAbonar = precioEntrada - (precioEntrada * descuentoAdolescente) / 100;
    return `El precio de la entrada es de $${totalAbonar}`;
  } else if (edad > 65) {
    totalAbonar = precioEntrada - (precioEntrada * descuentoJubilado) / 100;
    return `El precio de la entrada es de $${totalAbonar}`;
  }
};

console.log(leer(30));
