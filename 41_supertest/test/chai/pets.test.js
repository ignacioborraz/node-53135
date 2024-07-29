import { expect } from "chai";
import environment from "../../src/utils/env.util.js";
import dao from "../../src/dao/dao.factory.js";
const { petsManager } = dao;

describe("Testeando el recurso PET", () => {
  const data = { name: "Lolo", specie: "dog" };
  let id;
  it("Testeando que la creación de una mascota recibe un objeto con la propiedad 'name'", () => {
    expect(data).to.have.property("name");
  });
  it("Testeando que la creación de una mascota recibe un objeto con la propiedad 'name' de tipo string", () => {
    expect(data.name).to.be.a("string");
  });
  it("Testeando que la creación de una mascota recibe un objeto con la propiedad 'specie'", () => {
    expect(data).to.have.property("specie");
  });
  it("Testeando que la creación de una mascota recibe un objeto con la propiedad 'specie' de tipo string", () => {
    expect(data.specie).to.be.a("string");
  });
  /* it("Testeando que la creación de una mascota recibe un objeto con la propiedad opcional 'image'", () => {
    expect(data).to.have.property("image").that.exists;
  }); */
  it("Testeando que la creación de una mascota devuelve un objeto con un _id", async () => {
    const response = await petsManager.create(data);
    id = response._id;
    expect(response).to.have.property("_id");
  });
  it("Testeando la actualización de una mascota", async () => {
    const one = await petsManager.readBy({ _id: id });
    const response = await petsManager.update(id, { name: "sol" });
    expect(one.name).is.not.equal(response.name);
  });
  it("Testeando la eliminacion de una mascota", async () => {
    await petsManager.destroy(id);
    const one = await petsManager.readBy({ _id: id });
    expect(one).not.exist;
  });
});
