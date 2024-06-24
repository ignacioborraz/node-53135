//REPOSITORIO LLAMA A DAO
import PetDto from "../dto/pets.dto.js";
import dao from "../dao/dao.factory.js";
const { petsManager } = dao;

class PetsRepository {
  constructor() {
    this.model = petsManager;
  }
  createRepository = async (data) => {
    try {
      data = new PetDto(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readRepository = async (filter) => {
    try {
      const all = await this.model.read(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readByIdRepository = async (id) => {
    try {
      const one = await this.model.readOne(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateRepository = async (id, data) => {
    try {
      //agregar UpdatePetDto para modificar el objeto data ante la actualizacion
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroyRepository = async (id) => {
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
