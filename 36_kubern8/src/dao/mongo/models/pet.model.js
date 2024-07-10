import { Schema, model, Types } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = "pets";

const schema = new Schema(
  {
    name: { type: String, required: true },
    specie: { type: String, required: true },
    birthDate: { type: Date },
    adopted: { type: Boolean },
    owner: { type: Types.ObjectId, ref: "users" },
    image: { type: String },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
const Pet = model(collection, schema);

export default Pet;
