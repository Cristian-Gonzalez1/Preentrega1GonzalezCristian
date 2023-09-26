const productos = [
    {nombre: "Huevos", precio: 300},
    {nombre: "Lechuga", precio: 150},
    {nombre: "Tomate", precio: 200},
    {nombre: "Papas", precio: 350},    
    {nombre: "Cebolla", precio: 100}, 
    {nombre: "Morrones", precio: 250}, 
];

let carrito = []

let seleccion = prompt ("Hola, desea comprar algún producto?")

while (seleccion != "si" && seleccion !="no"){
    alert("Por favor, ingresar sí o no")
    seleccion = prompt("Hola, desea comprar algún producto?")
} 

if(seleccion =="si"){
    alert("A continuación, nuestra lista de productos")
    let todoslosproductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$");
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no"){
    alert("Hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Huevos" || producto == "Lechuga" || producto == "Tomate" || producto == "Papas" || producto =="Cebolla" || producto == "Morrones"){
        switch (producto) {
            case "Huevos":
            precio = 300;
            break;
            case "Lechuga":
            precio = 150;
            break;
            case "Tomate":
            precio = 200;
            break;
            case "Papas":
            precio = 350;
            break;
            case "Cebolla":
            precio = 100;
            break;
            case "Morrones":
            precio = 250;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades desea?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)  
} else {
    alert("No tenemos ese producto!")
}

seleccion = prompt("Desea seguir comprando?")

while(seleccion === "no"){
    alert("Gracias por su compra!")
    carrito.forEach((carritofinal) => {
        console.log(`producto: ${carritofinal.producto}, unidades : ${carritofinal.unidades} Total a pagar por producto ${carritofinal.unidades * carritofinal.precio}`)
    })
break;
}
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)

