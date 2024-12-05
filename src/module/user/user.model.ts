// user Schema
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  age: { type: Number, required: true },
  photo: String,
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum : {values:["user", "admin"], message: "{VALUE} is not valid, please provide a valid role"},
    required: true,
  },
  userStatus: {
    type: String,
    enum :{values:  ["active", "inactive"], message: "{VALUE} is not valid, please provide a valid status"},
    required: true,
  },
});

const User = model("User", userSchema);
export default User;
