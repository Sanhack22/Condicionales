let angulo1 = parseFloat(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo:"));

let sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos === 180) {
  console.log("Los ángulos corresponden a un triángulo ");
} else {
  console.log("Los ángulos no corresponden a un triángulo ");
}