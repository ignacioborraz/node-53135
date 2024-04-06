import fs from "fs";
import crypto from "crypto";

class UsersManager {
  constructor() {
    this.path = "./src/data/fs/files/users.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
    }
  }
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
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(one);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async read(role) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      role && (all = all.filter((each) => each.role === role));
      return all;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let note = all.find((each) => each.id === id);
      return note;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      } else {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      //el throw de la linea 72 hace saltar este catch
      throw error;
      //el throw de la linea 76 hace saltar el catch de la ruta
    }
  }
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let one = all.find((each) => each.id === id);
      if (one) {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        return one;
      } else {
        const error = new Error("not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}

const usersManager = new UsersManager();
export default usersManager;
