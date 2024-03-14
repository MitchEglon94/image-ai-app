import { Schema, model, models } from "mongoose";

//clerk id, email, user, photo, firstname, lastname, plandId, creditbalance

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  planId: { type: String, default: 1 },
  creditBalance: { type: Number, default: 10 },
  photo: { type: String, required: true },
});

const User = models?.User || model("User", UserSchema);

export default User;
