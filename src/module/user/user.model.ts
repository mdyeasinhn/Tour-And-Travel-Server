// user Schema
import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },

  age: { type: Number, required: true },
  photo: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  role: {
    type: String,
    enum: { values: ["user", "admin"], message: "{VALUE} is not valid, please provide a valid role" },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: { values: ["active", "inactive"], message: "{VALUE} is not valid, please provide a valid status" },
    default: "active",
    required: true,
  },
});

// hook -> pre
// userSchema.pre("find", function(this, next){
//   this.find({userStatus : {$ne : "active"}});
//   next();
// });

// hook -> post

// userSchema.post("find", function(docs, next){
//   docs.forEach((doc: IUser)=>{
//     doc.name = doc.name.toUpperCase()
//   });
//   next();
// })

const User = model<IUser>("User", userSchema);

export default User;
