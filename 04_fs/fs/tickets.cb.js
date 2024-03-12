const fs = require("fs");

const ruta = "./04_fs/tickets.json";
const contenido = JSON.stringify([], null, 2);

fs.writeFile(ruta, contenido, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("creado");
  }
});

fs.readFile(ruta, "utf-8", (error, exito) => {
  if (error) {
    console.log(error);
  } else {
    console.log(exito);
  }
});

fs.unlink(ruta, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("eliminado");
  }
});
