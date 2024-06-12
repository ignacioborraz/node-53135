//SERVICIO LLAMA A REPOSITORIO

class Service {
  constructor(repository) {
    this.repository = repository;
  }
  createService = async (data) => {};
  readService = async (filter) => {};
  readOneService = async (uid) => {};
  updateService = async (uid, data) => {};
  destroyService = async (uid) => {};
}

export default Service;
