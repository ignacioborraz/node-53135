import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

const persistence = argsUtil.persistence;

class ProductsDTO {
  constructor(data) {
    persistence !== "mongo" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.user_id = data.user_id;
    this.product_id = data.product_id;
    this.quantity = data.quantity || 1;
    this.state = data.state || "reserved";
    persistence !== "mongo" && (this.createdAt = new Date());
    persistence !== "mongo" && (this.updatedAt = new Date());
  }
}

export default ProductsDTO;
