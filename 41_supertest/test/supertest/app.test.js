import { expect } from "chai";
import supertest from "supertest";
import environment from "../../src/utils/env.util.js";
import usersRepository from "../../src/repositories/auth.rep.js";
import petsRepository from "../../src/repositories/pets.rep.js";

const requester = supertest(`http://localhost:${environment.PORT}/api`);

describe("Testeando ADOPTME API", function () {
  this.timeout(20000);
  const user = {
    first_name: "ignacio",
    email: "ignacioborraz@hotmail.com",
    password: "hola1234",
    role: "ADMIN",
    verify: true,
  };
  const animal = {
    name: "tony",
    specie: "dog",
  };
  let token = "";
  it("Registro de un usuario", async () => {
    const response = await requester.post("/auth/register").send(user);
    const { _body } = response;
    //console.log(_body);
    expect(_body.statusCode).to.be.equals(201);
  });
  it("Inicio de sesión de un usuario", async () => {
    const response = await requester.post("/auth/login").send(user);
    const { _body, headers } = response;
    //console.log(_body);
    //console.log(headers);
    token = headers["set-cookie"][0].split(";")[0];
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Creación de una mascota por parte de un administrador", async () => {
    const response = await requester
      .post("/pets")
      .send(animal)
      .set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(201);
  });
  it("Eliminación de una mascota por parte de un administrador", async () => {
    const foundPet = await petsRepository.readBy({ name: animal.name });
    const response = await requester
      .delete("/pets/" + foundPet._id)
      .set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Eliminación de una mascota sin haber iniciado sesión", async () => {
    const response = await requester
      .delete("/pets/666a384a3e5c8e385e8b90d8")
      .send(animal);
    const { _body } = response;
    //console.log(_body);
    expect(_body.statusCode).to.be.equals(401);
  });
  it("Cerrado de sesión", async () => {
    const response = await requester.post("/auth/signout").set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Eliminación de un usuario", async () => {
    const foundUser = await usersRepository.readByEmail(user.email);
    const response = await requester.delete("/auth/" + foundUser._id);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
});
