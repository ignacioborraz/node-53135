//REPOSITORIO LLAMA A DAO
import dao from "../dao/dao.factory.js";
import UsersDTO from "../dto/users.dto.js";
const { usersManager } = dao;

class AuthRepository {
  constructor() {
    this.model = usersManager;
  }
  create = async (data) => {
    try {
      data = new UsersDTO(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readByEmailRepository = async (email) => {
    try {
      const one = await this.model.readByEmail(email);
      return one;
    } catch (error) {
      throw error;
    }
  };
  updateRepository = async (id, data) => {
    try {
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const authRepository = new AuthRepository();
export default authRepository;
