//REPOSITORIO LLAMA A DAO
import PetDto from "../dto/pets.dto.js";
import dao from "../dao/dao.factory.js";
const { petsManager } = dao;

class PetsRepository {
  constructor() {
    this.model = petsManager;
  }
  create = async (data) => {
    try {
      data = new PetDto(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  read = async (filter) => {
    try {
      const all = await this.model.read(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readBy = async (obj) => {
    try {
      const one = await this.model.readBy(obj);
      return one;
    } catch (error) {
      throw error;
    }
  };
  paginate = async (filter, opts) => {
    try {
      const all = await this.model.paginate(filter, opts);
      return all;
    } catch (error) {
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      //agregar UpdatePetDto para modificar el objeto data ante la actualizacion
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroy = async (id) => {
    try {
      const one = await this.model.destroy(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const petsRepository = new PetsRepository();
export default petsRepository;
