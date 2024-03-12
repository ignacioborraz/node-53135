const fs = require("fs");
const crypto = require("crypto");

class NotesManager {
  //static #notes //esto es con memory
  constructor() {
    this.path = "./04_fs/app/fs/files/notes.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("archivo creado!");
    } else {
      console.log("archivo ya existe!");
    }
  }
  async create(data) {
    try {
      if (!data.text) {
        const error = new Error("ingrese un texto");
        console.log(error);
      } else {
        const note = {
          id: crypto.randomBytes(12).toString("hex"),
          text: data.text,
          date: data.date || new Date(),
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(note);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        console.log({ created: note.id });
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      console.log(all);
      return all;
    } catch (error) {
      console.log(error);
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let note = all.find((each) => each.id === id);
      if (!note) {
        throw new Error("NO ENCONTRADO");
      } else {
        console.log(note);
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let note = all.find((each) => each.id === id);
      if (!note) {
        throw new Error("NO ENCONTRADO");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log({ deleted: note.id });
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function test() {
  try {
    const notes = new NotesManager();
    await notes.create({ text: "my first note" });
    await notes.create({ text: "my 2nd note" });
    await notes.read();
    await notes.readOne("897748be372");
    await notes.destroy("897748be372");
    const third = await notes.create({ text: "my 3rd note" });
    await notes.readOne(third.id);
    await notes.destroy(third.id);
  } catch (error) {
    console.log(error);
  }
}
test();
