import fs from "fs";

class CarsManager {
    constructor() {
        this.path = "./src/data/fs/files/carts.json";
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
        if (!data.user_id || !data.product_id) {
          throw new Error("INGRESE USER_ID/PRODUCT_ID");
        } else {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            all.push(data);
            all = JSON.stringify(all, null, 2);
            await fs.promises.writeFile(this.path, all);
            return data;
        }
      } catch (error) {
        throw error;
      }
    }
    async read(filter) {
      try {
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        filter.user_id && (all = all.filter((each) => each.user_id === filter.user_id));
        return all;
      } catch (error) {
        throw error;
      }
    }
    //PROGRAMAR PAGINATE EN MEMORY
    async readOne(id) {
      try {
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        let one = all.find((each) => each.id === id);
        return one;
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
        }
        return one;
      } catch (error) {
        throw error;
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
        }
        return one;
      } catch (error) {
        throw error;
      }
    }
  }
  
  const carsManager = new CarsManager();
  export default carsManager;
  