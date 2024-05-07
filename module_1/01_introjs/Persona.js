// las clases se declaran con lapalbra reservada class
// se declaran con PascalCase
// se declaran en singular
// se declara representativo del recurso y en inglés

class Persona {
  static cantidadDePersonas = 0;
  //propiedad de la clase
  //para hacer uso de esta propiedad invoco la clase seguido de la propiedad
  //existe propiedad y métodos estaticos
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida || 100;
    //this hace referencia a ESTA instancia que se está construyendo
    Persona.cantidadDePersonas++;
  }
  comer(cantidad) {
    this.vida < 150
      ? (this.vida = (this.vida + cantidad) > 150 ? 150 : (this.vida+cantidad))
      //this.vida > 150 ===> que sea 150 
      : console.log("No podes comer más");
  }
  entrenar(cantidad) {
    if (this.vida > 50 && cantidad < this.vida) {
      this.vida = this.vida - cantidad;
    } else {
      console.log("No podes entrenar más");
    }
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
  }
}

const persona1 = new Persona("igna", 33, "rosario", 120);
persona1.comer(20);
console.log(persona1);
persona1.entrenar(10);
console.log(persona1);
persona1.comer(50);
console.log(persona1);
persona1.comer(20);
console.log(persona1);
const persona2 = new Persona("talia", 20, "cordoba");
persona2.comer(10);
persona2.entrenar(30);
persona2.entrenar(30);
persona2.comer(40);
persona2.mudarse("mendoza");
const persona3 = new Persona("sofia", 35, "caba");
const persona4 = new Persona("german", 24, "tucuman", 150);
console.log(persona4);
persona4.entrenar(50);
console.log(persona4);
persona4.comer(10);
console.log(persona4);
persona4.entrenar(60);
console.log(persona4);
persona4.entrenar(20);
console.log(persona4);
persona4.entrenar(20);
console.log(persona4);
persona4.entrenar(20);
console.log(persona4);
persona4.entrenar(20);
console.log(persona4);

console.log(persona1);
console.log(persona2);
console.log(Persona.cantidadDePersonas);
