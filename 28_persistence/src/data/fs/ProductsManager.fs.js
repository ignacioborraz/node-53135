import fs from "fs";

class ProductsManager {
    constructor() {
        this.path = "./src/data/fs/files/products.json";
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
        if (!data.title || !data.description) {
          throw new Error("INGRESE TITULO/DESCRIPCION");
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
  
  const productsManager = new ProductsManager();
  export default productsManager;
  