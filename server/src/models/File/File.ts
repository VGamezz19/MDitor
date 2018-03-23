import { Schema, Model, model } from "mongoose";
import { IFileModel } from "./IFileModel.interface";

/**
 * File Schema, Object Mongoose (Object)
 *
 * Defines Schema to use in collection File
 *
 * @version 1.0.0
 */
export const FileSchema: Schema = new Schema({
  title: String,
  content: String,
  folder: { type: Schema.Types.ObjectId, ref: "Folder" }
});

export const File: Model<IFileModel> = model<IFileModel>("File", FileSchema);