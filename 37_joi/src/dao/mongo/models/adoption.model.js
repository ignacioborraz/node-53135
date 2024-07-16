import { Schema, model, Types } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = "adoptions";

const schema = new Schema(
  {
    owner_id: { type: Types.ObjectId, ref: "users" },
    pet_id: { type: Types.ObjectId, ref: "pets" },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
const Adoption = model(collection, schema);

export default Adoption;
