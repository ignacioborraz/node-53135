import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

const persistence = argsUtil.persistence;

class ProductsDTO {
  constructor(data) {
    persistence !== "mongo" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.title = data.title;
    this.description = data.description;
    this.price = data.price || 1;
    this.stock = data.stock || 10;
    this.images = data.images || ["https://i.postimg.cc/kX8PKZpq/ipad.jpg"];
    this.colors = data.colors || [""];
    this.onsale = data.onsale || false;
    persistence !== "mongo" && (this.createdAt = new Date());
    persistence !== "mongo" && (this.updatedAt = new Date());
  }
}

export default ProductsDTO;
