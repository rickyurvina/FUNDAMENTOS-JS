// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
    cantidad: 50
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )
console.log( producto.cantidad )


// Destructuring
let { nombre, precio, disponible, cantidad , propiedades} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)
cantidad= cantidad+10;
console.log(cantidad)
console.table(producto)

// Object Literal Enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)

const { autenticado: autenticado2, usuario: usuario2 } = nuevoObjeto
console.log(autenticado2)
console.log(usuario2)