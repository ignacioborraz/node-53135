import { Schema, Types, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "notes";
const schema = new Schema(
  {
    text: { type: String, required: true },
    //por defecto los campos NO son obligatorios
    category: {
      type: String,
      default: "to do",
      enum: ["to do", "done"],
      index: true,
    },
    user_id: {
      type: Types.ObjectId,
      ref: "users",
      index: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function () {
  this.populate("user_id", "email photo -_id");
});
schema.pre("findOne", function () {
  this.populate("user_id", "email");
});

const Note = model(collection, schema);
export default Note;
