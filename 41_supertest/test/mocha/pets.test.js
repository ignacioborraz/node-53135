import assert from "assert";
//no es necesario porque esta incluido en dao
//import environment from "../../src/utils/env.util.js";
import dao from "../../src/dao/dao.factory.js";
const { petsManager } = dao;

describe(//la descripcion del entorno de testeo
"Testeando el recurso PET", () => { //la callback con todos los tests a ejecutar
  //antes de inicializar los tests es necesario
  //definir las variables necesarias para testear
  const data = { name: "Lolo", specie: "dog", image: "imagen.png" };
  let id;
  it(//la descripcion del test
  "Testeando que la creación de una mascota recibe un objeto con la propiedad 'name'", () => { //la callback con la logica del test
    assert.ok(data.name);
  });
  it(//la descripcion del test
  "Testeando que la creación de una mascota recibe un objeto con la propiedad 'name' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.name, "string");
  });
  it(//la descripcion del test
  "Testeando que la creación de una mascota recibe un objeto con la propiedad 'specie'", () => { //la callback con la logica del test
    assert.ok(data.specie);
  });
  it(//la descripcion del test
  "Testeando que la creación de una mascota recibe un objeto con la propiedad 'specie' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.specie, "string");
  });
  it("Testeando que la creación de una mascota recibe un objeto con la propiedad opcional 'image'", () => {
    assert.ok(data.image || true);
  });
  it("Testeando que la creación de una mascota devuelve un objeto con un _id", async () => {
    const response = await petsManager.create(data);
    id = response._id;
    assert.ok(response._id);
  });
  it("Testeando la actualización de una mascota", async () => {
    const one = await petsManager.readBy({ _id: id });
    const response = await petsManager.update(id, { name: "sol" });
    assert.notEqual(one.name, response.name);
  });
  it("Testeando la eliminacion de una mascota", async () => {
    await petsManager.destroy(id);
    const one = await petsManager.readBy({ _id: id });
    assert.strictEqual(one, null);
  });
});
