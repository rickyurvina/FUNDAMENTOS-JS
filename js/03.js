// Tipos de datos

// string
let cliente = "Ricardo";
console.log(cliente);
console.log(typeof cliente);

// Boolean
const descuento = false;
console.log(descuento);
console.log(typeof descuento);

// Number
const numero1 = 20.2;
// const numero2 = 30
const numero3 = -100;

console.log(typeof numero1);
// console.log(typeof numero2)
console.log(typeof numero3);

//  Strings o Cadenas de Texto
const alumno = "Juan";
let producto = "Monitor 20 pulgadas";

// const numero = "30"
// numero2 = 30

// console.log(typeof numero)
// console.log(typeof numero2)

//  BigInt
const numeroGrande = BigInt(918298193891887139831091038173813);
console.log(typeof numeroGrande);
const numero = 10;
const numero2 = 20;
console.log(numero + Number(numeroGrande));

// const numero = "30"
// const numero2 = 30
// console.log( typeof String(numero2))
// console.log( typeof Number(numero))

//  Symbol nos permite obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos e inmutables
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

//  Null
const descuento_n = null;
console.log(typeof descuento_n);
