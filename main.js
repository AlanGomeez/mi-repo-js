alert("Bienvenido a VZ, laboratorio en linea");
let usuario = prompt("Ingrese su usuario");

while(usuario !== "alan"){
    alert("Usuario incorrecto");
    usuario = prompt("Vuelva a ingresar su usuario.");
}

alert("Bienvenido " + usuario);
let turno = prompt("Ingrese su fecha de turno (en formato DDMM):");
if(turno === "3107"){
    alert("Su turno es el 31/07")
}else{
    alert("Fecha de turno incorrecta. Vuelva a ingresar su turno nuevamente.");
}

let reprogramar = prompt("¿Quiere reprogramar su turno? (responda Si o No)");
switch (reprogramar.toLowerCase()) {
    case "no":
        alert("Perfecto, Gracias por confirmar.");
        break;
    case "si":
        let nuevaFecha = prompt("Ingrese la nueva fecha de turno (en formato DDMM):");
        alert("Su turno ha sido reprogramado para el " + nuevaFecha + ", Muchas gracias.");
        break;   
    default:
        alert("Repuesta inválida. Por favor, responda Si o No.");
        break;
}