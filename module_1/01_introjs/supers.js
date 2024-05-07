const super1 = { nombre: "Batman" };
const super2 = { nombre: "Mujer Maravilla" };
const super3 = { nombre: "Ironman" };
let super4 = { nombre: "Hulk" };
const super5 = { nombre: "Loki" };

function printName(obj) {
  return `el nombre del superheroe es ${obj.nombre}`;
}

console.log(printName(super1));
console.log(printName(super2));
console.log(super5.nombre);

super5.edad = 33;
super5.ciudad = "Asgard";
console.log(super5);

super4 = { nombre: "Shehulk" };
console.log(super4);

const printAll =(arrayOfSupers)=> {
  //por cada elemento del array de superheroest
  for (let superheroe of arrayOfSupers) {
    //ejecuta todas estas sentencias
    //const template = printName(superheroe)
    //definir el template a imprimir en consola
    //console.log(template);
    //impresion en consola
    console.log(printName(superheroe));
  }
  console.log(array1);
}

const array1 = [super1, super2];
printAll(array1);
printAll([super3, super4, super5]);
printAll([]);
