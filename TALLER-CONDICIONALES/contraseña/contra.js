let contra = prompt("Ingrese una contraseña");

let bien = contra.length;

let funcional = contra.includes(" ");

if (funcional==true && bien>=8 && bien <=15) {
    console.log("Contraseña Correcta")
}else{
    console.log("Contraseña Incorrecta")
};