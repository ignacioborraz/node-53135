let booleano = false
//booleano = booleano || "reasigne valor por esta cadena de texto"
booleano = booleano ?? "reasigne valor por esta cadena de texto"
console.log(booleano);

let cero = 0
//cero = cero || "reasigna si es null o undefined"
cero = cero ?? "reasigna si es null o undefined"
console.log(cero);

let nula = null // undefined
let nodefindida = undefined
//nula = nula || "si es nula"
nula = nula ?? "si es nula"
console.log(nula);

const datos = {
  nombre: "igna"
}

datos.apellido = datos.apellido ?? "borraz"
//datos.apellido = "borraz"
console.log(datos);
