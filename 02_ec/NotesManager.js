class NotesManager {
  static quantity = 0;    //propiedad de la clase
  static #notes = [];     //propiedad privada de la clase
  create(data) {          //método del gestor que crea una nota (y la agrega al array de notas)
    const note = {        //primero construye el objeto nota
      id:                 //buscar la forma de que el id sea numerico y autoincremental
        NotesManager.quantity === 0
          ? 1
          : NotesManager.#notes[NotesManager.quantity - 1].id + 1,
      type: data.type || "to do",
      date: data.date || new Date(),
      text: data.text,
    };
    !data.text
      ? console.log("ingrese texto")
      : NotesManager.#notes.push(note) && NotesManager.quantity++;
  }
  read() {
    return NotesManager.#notes;
  }
}

const notes = new NotesManager();             //defino la instancia del gestor
notes.create({ text: "mi primera nota" });    //creo tres notas nota
notes.create({ text: "mi segunda nota" });
notes.create({ text: "mi tercera nota" });
notes.create({});                             //intento crear una nota sin la propiedad text

//console.log(NotesManager.#notes);
console.log(notes.read());                    //busco todas las notas y las muestro por consola
