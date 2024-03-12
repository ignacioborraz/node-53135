const fs = require("fs");

const ruta = "./04_fs/tickets.json";
const contenido = JSON.stringify([{ title: "hp1" }, { title: "hp2" }], null, 2);

fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

fs.promises
  .readFile(ruta, "utf-8")
  .then((respuesta) => console.log(JSON.parse(respuesta)))
  .catch((error) => console.log(error));

fs.promises
  .unlink(ruta)
  .then(() => console.log("se ha eliminado"))
  .catch((error) => console.log(error));
