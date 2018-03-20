import { Schema, Model, model } from "mongoose";
import { IFolderModel } from "./Folder.interface";

export const FolderSchema: Schema = new Schema({
  title: String,
  files: [{ type: Schema.Types.ObjectId, ref: "File" }]
});

// FolderSchema.virtual("files", {
//   ref: "File", // The model to use
//   localField: "title", // Find people where `localField`
//   foreignField: "content", // is equal to `foreignField`
//   // If `justOne` is true, "members" will be a single doc as opposed to
//   // an array. `justOne` is false by default.
//   justOne: false
// });

export const Folder: Model<IFolderModel> = model<IFolderModel>("Folder", FolderSchema);