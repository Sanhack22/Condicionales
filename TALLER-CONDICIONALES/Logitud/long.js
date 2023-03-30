let decicion = prompt("Que medida va a ingresar Km,M")

switch (decicion) {
  case "km":
    let km = parseFloat(prompt("cantidad de km?")) 
    console.log("La cantidad en Metros es de ",km*1000); 
    break;

  case "m":
    let m = parseFloat(prompt("cantidad de Metros?")) 
    console.log("La cantidad en Kilometros es de ",m*0.001); 
    break;

 
  default: console.log("Datos Invalidos");
    break;
}