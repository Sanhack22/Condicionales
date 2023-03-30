let nombre = prompt("Ingrese su nombre")
let cedula = prompt("Ingrese cedula")

let editar = prompt("desea editar? s/n")

switch (editar) {
  case "s":
    nombre = prompt("Ingrese nombre")
    cedula = prompt("Ingrese cedula")
    console.log("Sus nuevos datos son:", nombre, cedula);
    break;

  case "n":
    console.log("OK");
  
    break;

  default:console.log("Opcione invalida");
    break;
}