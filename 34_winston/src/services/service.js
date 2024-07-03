//SERVICIO LLAMA A REPOSITORIO

class Service {
  constructor(repository) {
    this.repository = repository;
  }
  createService = async (data) => {
    try {
      const one = await this.repository.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readAllService = async (filter) => {
    try {
      const all = await this.repository.read(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readByIdService = async (id) => {
    try {
      const one = await this.repository.readById(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readByEmailService = async (email) => {
    try {
      const one = await this.repository.readByEmail(email);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readByService = async (obj) => {
    try {
      const one = await this.repository.readById(obj);
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateService = async (id, data) => {
    try {
      const one = await this.repository.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroyService = async (id) => {
    try {
      const one = await this.repository.destroy(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default Service;
