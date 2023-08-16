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

let producto = prompt("¿Desea comprar algun producto?");
switch (producto.toLowerCase()) {
    case "no":
        alert("De acuerdo, muchas gracias.")
        break;
    case "si":
        alert("De acuerdo, estos son los siguientes productos:\n 1. omeprazol 250mg\n 2. tafirol 250mg\n 3. actron 600mg.");
        break;
    default:
        alert("No se agrego ningun producto al carrito.")
        break;
}

let compra = prompt("Presione cual opción desea.");
switch (compra.toLowerCase()) {
    case "1": 
    alert("De acuerdo, agregaremos al carrito el producto: omeprazol."); break;
    case "2": alert("De acuerdo, agregaremos al carrito el producto: tafirol."); break;
    case "3": alert("De acuerdo, agregaremos al carrito el producto: actron 600mg."); 
    default: alert("Opción invalida."); break;
}


const masProductos = [
    {id: 1, nombre: "ibuprofeno", precio: 350, mediosDePago: "debito y credito"},
    {id: 1, nombre: "dentrifico", precio: 400, mediosDePago: "debito y credito"},
    {id: 1, nombre: "cepillo de dientes", precio: 450, mediosDePago: "Solo debito, 10% off"},
    {id: 1, nombre: "gel muscular", precio: 700, mediosDePago: "credito en 6 cuotas sin interes"},
]

let productos = prompt("Tenemos mas productos disponibles: ");
let filtrados = masProductos.filter((item) => item.productos > productos);

productos.filter((item) => {
    alert(`
    id: ${item.id}
    nombre: ${item.nombre}
    precio: $${item.precio}
    mediosDePago: ${item.mediosDePago}
    `)
});



let nombre = prompt("Ingrese el producto que desea verificar: ");
let producto1 = producto1.find((item) => item.nombre === nombre);

if (nombre) {
   alert(`
    id: ${item.id}
    nombre: ${item.nombre}
    precio: $${item.precio}
    mediosDePago: ${item.mediosDePago}
    `);
} else {
    alert(`Producto no encontrado.`)
}