import mongoose from "mongoose";

const collection = "adoptions";

const schema = new mongoose.Schema(
  {
    owner_id: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
    pet_id: { type: mongoose.SchemaTypes.ObjectId, ref: "pets" },
  },
  { timestamps: true }
);

const Adoption = mongoose.model(collection, schema);

export default Adoption;
