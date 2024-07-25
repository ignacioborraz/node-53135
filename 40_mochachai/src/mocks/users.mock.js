import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
import authRepository from "../repositories/auth.rep.js";

async function createData() {
  try {
    dbConnect();
    for (let i = 1; i <= 50; i++) {
      const first_name = faker.person.firstName()
      const last_name = faker.person.lastName()
      const email =  first_name+"."+last_name+"@codermail.com"
      const password = "hola1234"
      const avatar = faker.image.avatar()
      const verify = true
      const user = { first_name, last_name, email, password, verify, avatar}
      await authRepository.create(user);
    };

    console.log("users created");
  } catch (error) {
    console.log(error);
  }
}

createData();
