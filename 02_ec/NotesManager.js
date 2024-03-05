class NotesManager {
  static quantity = 0;
  static #notes = [];
  create(data) {
    const note = {
      id:
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

const notes = new NotesManager();
notes.create({ text: "mi primera nota" });
notes.create({ text: "mi segunda nota" });
notes.create({ text: "mi tercera nota" });
notes.create({});

//console.log(NotesManager.#notes);
console.log(notes.read());
