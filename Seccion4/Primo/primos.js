let numero = parseInt(prompt("Ingrese un número entre 1 y 15:"));

if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13) {
  console.log("es un número primo");
} else if (numero === 1 || numero === 4 || numero === 6 || numero === 8 || numero === 9 || numero === 10 || numero === 12 || numero === 14 || numero === 15) {
  console.log("no es un número primo");
} else {
  console.log("El número ingresado no es válido.");
}
