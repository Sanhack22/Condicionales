let año = parseInt(prompt("Ingrese un año bisiesto"));

let bisiesto = año%4==0 && año%100!=0 || año%400==0;

if (bisiesto==true) {

    console.log("El año si es bisiesto");
    
}else{
    console.log("El año no es bisiesto");
};


