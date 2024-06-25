import fs from "fs";
import crypto from "crypto";

class UsersManager {
	static #users = []
  async create(data) {
    try {
      if (!data.email || !data.password) {
        throw new Error("INGRESE EMAIL/PASSWORD");
      } else {
        const one = {
          id: crypto.randomBytes(12).toString("hex"),
          email: data.email,
          password: data.password,
          role: data.role || 0,
          photo: data.photo || "https://i.postimg.cc/wTgNFWhR/profile.png",
          age: data.age || 12,
        };
        UsersManager.#users.push(one);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async read(role) {
    try {
      return UsersManager.#users;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let note = UsersManager.#users.find((each) => each.id === id);
      return note;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      let one = UsersManager.#users.find((each) => each.id === id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      let one = UsersManager.#users.find((each) => each.id === id);
      if (one) {
        UsersManager.#users = UsersManager.#users.filter((each) => each.id !== id);
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const usersManager = new UsersManager();
export default usersManager;
