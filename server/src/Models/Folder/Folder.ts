import { Schema, Model, model } from "mongoose";
import { IFolderModel } from "./Folder.interface";

/**
 * Folder Schema, Object Mongoose (Object)
 *
 * Defines Schema to use in collection Folder
 *
 * @version 1.0.0
 */
export const FolderSchema: Schema = new Schema({
  title: String,
  files: [{ type: Schema.Types.ObjectId, ref: "File" }]
});

export const Folder: Model<IFolderModel> = model<IFolderModel>("Folder", FolderSchema);