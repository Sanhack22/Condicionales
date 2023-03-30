let opcion = prompt("De que desea saber el precio? Moto - Carro - Bicicleta")

switch (opcion) {
  case "moto": console.log("EL precio es de 2000000");
    
    break;

  case "carro": console.log("El precio es de 8000000");

    break;

  case "bicicleta": console.log("El precio es de 30000");

    break

  default: console.log("Objeto invalido");
    break;
}