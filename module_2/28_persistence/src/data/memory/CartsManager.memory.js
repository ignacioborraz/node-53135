class CarsManager {
  static #carts = [];
  async create(data) {
    try {
      if (!data.user_id || !data.product_id) {
        throw new Error("INGRESE USER_ID/PRODUCT_ID");
      } else {
        CarsManager.#carts.push(data);
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
  async read(filter) {
    try {
      const filtered = [...CarsManager.#carts];
      filter.user_id &&
        (filtered = CarsManager.#carts.filter(
          (each) => each.user_id === filter.user_id
        ));
      return filtered;
    } catch (error) {
      throw error;
    }
  }
  //PROGRAMAR PAGINATE EN MEMORY
  async readOne(id) {
    try {
      let note = CarsManager.#carts.find((each) => each.id === id);
      return note;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      let one = CarsManager.#carts.find((each) => each.id === id);
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
      let one = CarsManager.#carts.find((each) => each.id === id);
      if (one) {
        CarsManager.#carts = CarsManager.#carts.filter(
          (each) => each.id !== id
        );
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const carsManager = new CarsManager();
export default carsManager;
