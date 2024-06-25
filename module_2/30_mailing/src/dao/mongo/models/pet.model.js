import mongoose from "mongoose";

const collection = "pets";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specie: { type: String, required: true },
    birthDate: { type: Date },
    adopted: { type: Boolean },
    owner: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
    image: { type: String },
  },
  { timestamps: true }
);

const Pet = mongoose.model(collection, schema);

export default Pet;
