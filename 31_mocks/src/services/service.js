//SERVICIO LLAMA A REPOSITORIO

class Service {
  constructor(repository) {
    this.repository = repository;
  }
  createService = async (data) => {
    try {
      const one = await this.repository.createRepository(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readService = async (filter) => {
    try {
      const all = await this.repository.readRepository(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readByIdService = async (id) => {
    try {
      const one = await this.repository.readByIdRepository(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readByEmailService = async (email) => {
    try {
      const one = await this.repository.readByEmailRepository(email);
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateService = async (id, data) => {
    try {
      const one = await this.repository.updateRepository(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroyService = async (id) => {
    try {
      const one = await this.repository.destroyRepository(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default Service;
