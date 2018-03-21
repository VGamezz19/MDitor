import { Schema, Model, model } from "mongoose";
import { IUserModel } from "./User.interface";

/**
 * Folder Schema, Object Mongoose (Object)
 *
 * Defines Schema to use in collection Folder
 *
 * @version 1.0.0
 */
const UserSchema: Schema = new Schema({
  name: String,
  surname: String,
  email: String,
  username: String,
  password: String,
  folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }]
});

const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export { User, UserSchema };