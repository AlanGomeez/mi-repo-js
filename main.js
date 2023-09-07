// alert("Bienvenido a VZ, laboratorio en linea");
// let usuario = prompt("Ingrese su usuario");

// while(usuario !== "alan"){
//     alert("Usuario incorrecto");
//     usuario = prompt("Vuelva a ingresar su usuario.");
// }

// alert("Bienvenido " + usuario);
// let turno = prompt("Ingrese su fecha de turno (en formato DDMM):");
// if(turno === "3107"){
//     alert("Su turno es el 31/07")
// }else{
//     alert("Fecha de turno incorrecta. Vuelva a ingresar su turno nuevamente.");
// }

// let reprogramar = prompt("¿Quiere reprogramar su turno? (responda Si o No)");
// switch (reprogramar.toLowerCase()) {
//     case "no":
//         alert("Perfecto, Gracias por confirmar.");
//         break;
//     case "si":
//         let nuevaFecha = prompt("Ingrese la nueva fecha de turno (en formato DDMM):");
//         alert("Su turno ha sido reprogramado para el " + nuevaFecha + ", Muchas gracias.");
//         break;   
//     default:
//         alert("Repuesta inválida. Por favor, responda Si o No.");
//         break;
// }

// let producto = prompt("¿Desea comprar algun producto?");
// switch (producto.toLowerCase()) {
//     case "no":
//         alert("De acuerdo, muchas gracias.")
//         break;
//     case "si":
//         alert("De acuerdo, estos son los siguientes productos:\n 1. omeprazol 250mg\n 2. tafirol 250mg\n 3. actron 600mg.");
//         break;
//     default:
//         alert("No se agrego ningun producto al carrito.")
//         break;
// }

// let compra = prompt("Presione cual opción desea.");
// switch (compra.toLowerCase()) {
//     case "1": 
//     alert("De acuerdo, agregaremos al carrito el producto: omeprazol."); break;
//     case "2": alert("De acuerdo, agregaremos al carrito el producto: tafirol."); break;
//     case "3": alert("De acuerdo, agregaremos al carrito el producto: actron 600mg."); 
//     default: alert("Opción invalida."); break;
// }


// const productos = [
//     {id: 1, nombre: "ibuprofeno", precio: 300, mediosDePago: "debito y credito"},
//     {id: 1, nombre: "dentrifico", precio: 400, mediosDePago: "debito y credito"},
//     {id: 1, nombre: "cepillo de dientes", precio: 600, mediosDePago: "Solo debito, 10% off"},
//     {id: 1, nombre: "gel muscular", precio: 750, mediosDePago: "credito en 6 cuotas sin interes"},
// ]

// let precio = prompt("ingrese el valor que desea gastar");
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//     alert(`
//     id: ${item.id}
//     nombre: ${item.nombre}
//     precio: $${item.precio}
//     mediosDePago: ${item.mediosDePago}
//     `)
// });



// let resumen = productos.map((item) => {
//     return item.id, item.nombre, item.precio, item.mediosDePago
// });
// alert("Resumen de todo " + resumen + turno);




const productos = [
    {id: 1, nombre: "ibuprofeno", precio: 100},
    {id: 2, nombre: "actron", precio: 200},
    {id: 3, nombre: "gasa", precio: 300},
    {id: 4, nombre: "buscapina", precio: 150},
];

localStorage.setItem("productos", JSON.stringify(productos));

const agregar = (id) => {
//quiero encontrar(find) el item que en su id sea === igual al id que pase por parametro
    let producto = productos.find((item) => item.id === id);
    console.log(producto);
};

//muestros los productos en el DOM
productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="color">
        <h2>id: ${item.id}</h2>
        <p>nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
        <button id="boton${item.id}">Agregar</button>
    </div>
    `;
    document.body.append(div);

    //boton por ID
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
});