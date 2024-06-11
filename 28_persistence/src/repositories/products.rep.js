import dao from "../data/dao.factory.js";
import ProductsDTO from "../dto/products.dto.js";
const { products } = dao;
//REPOSITORIO ES LA CAPA QUE LLAMA A DAO (DAO importa la persistencia que corresponda)
//ADEMAS ES LA CAPA ENCARGADA DE TRANSFORMAR LOS OBJETOS CON LOS DTO CORRESPONDIENTES

class ProductsRepository {
    constructor(manager) {
      this.model = manager;
    }
    createRepository = async (data) => {
      try {
        data = new ProductsDTO(data)
        const one = await this.model.create(data);
        return one;
      } catch (error) {
        throw error;
      }
    };
    readRepository = async (role) => {
      try {
        const all = await this.model.read(role);
        return all;
      } catch (error) {
        throw error;
      }
    };
    paginateRepository = async ({ filter, opts }) => {
      try {
        const all = await this.model.paginate({ filter, opts });
        return all;
      } catch (error) {
        throw error;
      }
    };
    readOneRepository = async (uid) => {
      try {
        const one = await this.model.readOne(uid);
        return one;
      } catch (error) {
        throw error;
      }
    };
    updateRepository = async (uid, data) => {
      try {
        const one = await this.model.update(uid, data);
        return one;
      } catch (error) {
        throw error;
      }
    };
    destroyRepository = async (uid) => {
      try {
        const one = await this.model.destroy(uid);
        return one;
      } catch (error) {
        throw error;
      }
    };
  }
  
const productsRepository = new ProductsRepository(products);
export default productsRepository;
