// Listas, arrays o arreglos
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Apple",
    isWhite: false,
    contactos: ["Gorka", "Gonzalo", "David"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 128,
    }
}
movil.year = 2019;
movil.isWhite= true;

console.log(movil.tarjeta.marca);

// Fechas
// Librerias de apoyo para trabajar con fechas: Moment.js
const ahora = new Date();
console.log(ahora);

const fechaMilis = new Date(5000);
console.log(fechaMilis);

const fechaCadena = new Date("march 25 2020");
console.log(fechaCadena);

const fechaValores = new Date(2022, 01, 15);
console.log(fechaValores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);