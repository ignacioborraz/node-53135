const fs = require("fs");
const crypto = require("crypto");

module.exports = class NotesManager {
  //static #notes //esto es con memory
  constructor() {
    this.path = "./data/fs/files/notes.json";
    //OJO CON LA RUTA!!!
    //PRUEBEN QUE FUNCIONE CORRECTAMENTE!!!
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      //SI NO EXISTE
      const stringData = JSON.stringify([], null, 2);
      //DEFINE EL CONTENIDO
      fs.writeFileSync(this.path, stringData);
      //CREA EL ARCHIVO
      console.log("ARCHIVO CREADO!");
    } else {
      console.log("ARCHIVO YA EXISTE!");
    }
  }
  async create(data) {
    try {
      if (!data.text) {
        //SI NO EXISTE LA PROPIEDAD OBLIGATORIA
        throw new Error("INGRESE TEXT");
        //ARROJA EL ERROR
      } else {
        const note = {
          id: crypto.randomBytes(12).toString("hex"),
          text: data.text,
          date: data.date || new Date(),
        };
        //CREO EL OBJETO CON LOS DATOS DE LA NOTA
        let all = await fs.promises.readFile(this.path, "utf-8");
        //ESPERO LA LECTURA DEL ARCHIVO Y LO GUARDO EN LA VARIABLE ALL
        all = JSON.parse(all);
        //PARSEO
        all.push(note);
        //PUSHEO
        all = JSON.stringify(all, null, 2);
        //STRINGUIFEO
        await fs.promises.writeFile(this.path, all);
        //SOBRE-ESCRIBO
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
      //ESPERO LA LECTURA DEL ARCHIVO Y LO GUARDO EN LA VARIABLE ALL
      all = JSON.parse(all);
      //PARSEO
      if (all.length === 0) {
        //SI NO HAY NOTAS
        throw new Error("NO HAY NOTAS");
        //ARROJA EL ERROR
      } else {
        console.log(all);
        return all;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      //ESPERO LA LECTURA DEL ARCHIVO Y LO GUARDO EN LA VARIABLE ALL
      all = JSON.parse(all);
      //PARSEO
      let note = all.find((each) => each.id === id);
      //BUSCO LA NOTA
      if (!note) {
        //SI NO EXISTE LA NOTA
        throw new Error("NO ENCONTRADO");
        //ARROJA EL ERROR
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
      //ESPERO LA LECTURA DEL ARCHIVO Y LO GUARDO EN LA VARIABLE ALL
      all = JSON.parse(all);
      //PARSEO
      let note = all.find((each) => each.id === id);
      //BUSCO LA NOTA
      if (!note) {
        //SI NO EXISTE LA NOTA
        throw new Error("NO ENCONTRADO");
        //ARROJA EL ERROR
      } else {
        let filtered = all.filter((each) => each.id !== id);
        //FILTRO PARA SACAR DEL ARRAY
        filtered = JSON.stringify(filtered, null, 2);
        //STRINGUIFEO
        await fs.promises.writeFile(this.path, filtered);
        //SOBRE-ESCRIBO
        console.log({ deleted: note.id });
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

/* async function test() {
  try {
    const notes = new NotesManager();
    //EL ERROR SE ESTABA GENERANDO PORQUE VARIOS MÉTODOS ESTABAN SOBRE-ESCRIBIENDO AL MISMO TIEMPO
    //CON AWAIT "ESPERAMOS" PARA EVITAR ESOS PROBLEMAS
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
test(); */

