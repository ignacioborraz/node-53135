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
  readByEmail = async (email) => {
    try {
      const one = await this.model.readBy({ email });
      return one;
    } catch (error) {
      throw error;
    }
  };
  update = async (id, data) => {
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
