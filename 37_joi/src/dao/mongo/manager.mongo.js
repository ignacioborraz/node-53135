class Manager {
  constructor(Model) {
    this.model = Model;
  }
  create = async (data) => {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  read = async (filter, sort) => {
    try {
      const all = await this.model.find(filter).sort(sort);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readBy = async (obj) => {
    try {
      const one = await this.model.findOne(obj);
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
      const one = await this.model.findByIdAndUpdate(id, data, { new: true });
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroy = async (id) => {
    try {
      const one = await this.model.findByIdAndDelete(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default Manager;
