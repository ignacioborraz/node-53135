//console.log("hola mundo");
//console.log("esta es la clase 0 del curso de programacion con backend");
//console.info("informacion");
//console.warn("advertencia");
//console.error("error");

/* string */
const cadenaDeTexto = "con camelCase, no con PascalCase";
console.log(cadenaDeTexto);

/* number */
let numero = 1234.41568;
console.log(numero);

/* boolean */
const verdadero = true; //false
console.log(verdadero);

const datos = { cadenaDeTexto, numero, verdadero, boolean: verdadero };
console.log(datos);

const arreglo = [1, "uno", datos, verdadero];
console.log(arreglo);

numero = 1234;
console.log(numero);

datos.fechaDeNacimiento = new Date("1990/07/09");
datos["fecha"] = 1990;
console.log(datos);
