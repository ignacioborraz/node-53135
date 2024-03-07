class NotesManager {
  static #notes = [];
  create(data) {
    try {
      const note = {
        id:
          NotesManager.#notes.length === 0
            ? 1
            : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1,
        type: data.type || "to do",
        text: data.text,
        date: data.date || new Date(),
      };
      if (!data.text) {
        throw new Error("INGRESE TEXTO EN LA NOTA");
      } else {
        NotesManager.#notes.push(note);
        console.log("nota creada");
      }
    } catch (error) {
      console.log(error);
    }
  }
  read() {
    try {
      if (NotesManager.#notes.length === 0) {
        throw new Error("NO HAY NOTAS");
      } else {
        return NotesManager.#notes;
      }
    } catch (error) {
      console.log(error);
    }
  }
  readOne(id) {
    try {
      const one = NotesManager.#notes.find((each) => each.id === id);
      if (!one) {
        throw new Error("NO EXISTE LA NOTA");
      } else {
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }
  destroy(id) {
    try {
      this.readOne(id);
      /*      const one = readOne(id)
       if(!one) {
        throw new Error("NO EXISTE LA NOTA");
      } else { */
      const within = NotesManager.#notes.filter((each) => each.id !== id);
      NotesManager.#notes = within;
      console.log("nota eliminada");
      //}
    } catch (error) {
      console.log(error);
    }
  }
}

const notes = new NotesManager();
console.log(notes.read()); //sin try/catch se terminó la ejecución cuando ocurrió este error
notes.create({ type: "done" });
notes.create({ text: "texto de nota 1" });
notes.create({ text: "texto de nota 2" });
notes.create({ text: "texto de nota 3" });
notes.create({ text: "texto de nota 4" });
notes.create({ text: "texto de nota 5" });
notes.create({ text: "texto de nota 6" });
console.log(notes.readOne(10));
console.log(notes.readOne(2));
notes.destroy(3)
notes.destroy(20)
