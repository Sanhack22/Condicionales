let texto = prompt("Ingrese un texto que contenga las palabras ADSO y desarrolladores");

let ADSO = texto.includes("ADSO")
let desarro = texto.includes("desarrolladores")

if (ADSO && desarro ==true) {
    console.log("El texto SI contiene las palabras ADSO y desarroladores");
}else{
    console.log("No contiene las palabras indicadas");
};