import { Schema, model, Types } from "mongoose";

const collection = "users";

const schema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    photo: { type: String, require: true },
    role: { type: Number, require: true },
    online: { type: Boolean, require: true },
    user_id: { type: Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

const User = model(collection, schema);

export default User; 

