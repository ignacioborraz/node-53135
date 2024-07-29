import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const collection = "users";

const schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    role: { type: String, default: "USER" },
    verify: { type: Boolean, default: false },
    verifyCode: { type: String, required: true }
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
const User = model(collection, schema);

export default User;
