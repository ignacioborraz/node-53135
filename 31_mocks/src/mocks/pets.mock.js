import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
import petsRepository from "../repositories/pets.rep.js";

async function createData() {
  try {
    dbConnect();
    for (let i = 1; i <= 30; i++) {
      const pet = {
        name: faker.person.firstName(),
        specie: faker.animal.rabbit(),
        birthDate: faker.date.birthdate({ min: 2010, max: 2024, mode: "year" }),
        adopted: false,
        image: faker.image.urlLoremFlickr({ category: "rabbits" }),
      };
      await petsRepository.createRepository(pet);
    }
    console.log("pets created");
  } catch (error) {
    console.log(error);
  }
}

createData();
