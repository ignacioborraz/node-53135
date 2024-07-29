import environment from "../../src/utils/env.util.js";
import { expect } from "chai";
import supertest from "supertest";
import dao from "../../src/dao/dao.factory.js";
const { usersManager } = dao;

const requester = supertest("http://localhost:" + environment.PORT + "/api");

describe("Testeando ADOPTME API", function () {
  this.timeout(20000); // Aumenta el tiempo de espera para todas las pruebas dentro de este bloque

  const user = {
    first_name: "ignacio",
    email: "ignacioborraz@hotmail.com",
    password: "hola1234",
    role: "ADMIN",
    verify: true
  };
  let token = "";

  it("Registro de un usuario correctamente", async function () {
    try {
      const response = await requester.post("/auth/register").send(user);
      const { _body } = response
      expect(_body.statusCode).to.be.equals(201);
    } catch (error) {
      console.error("Error en prueba de registro:", error);
      throw error;
    }
  });

  it("Inicio de sesión correctamente", async function () {
    try {
      const response = await requester.post("/auth/login").send(user);
      const { headers } = response;
      token = headers["set-cookie"][0].split(";")[0]
      //console.log(token);
      const { _body } = response
      expect(_body.statusCode).to.be.equals(200);
    } catch (error) {
      console.error("Error en prueba de inicio de sesión:", error);
      throw error;
    }
  });

  it("Cerrado de sesión correctamente", async function () {
    try {
      const response = await requester.post("/auth/signout").set("Cookie", token);
      const { _body } = response
      expect(_body.statusCode).to.be.equals(200);
    } catch (error) {
      console.error("Error en prueba de cerrado de sesión:", error);
      throw error;
    }
  });

  it("Eliminación de un usuario correctamente", async function () {
    try {
      const foundUser = await usersManager.readBy({ email: user.email });
      const response = await requester.delete("/auth/" + foundUser._id);
      const { _body } = response
      expect(_body.statusCode).to.be.equals(200);
    } catch (error) {
      console.error("Error en prueba de eliminación de usuario:", error);
      throw error;
    }
  });
});
