import { Schema, Model, model } from "mongoose";
import { IFileModel } from "./File.interface";

/**
 * File Schema, Object Mongoose (Object)
 *
 * Defines Schema to use in collection File
 *
 * @version 1.0.0
 */
export const FileSchema: Schema = new Schema({
  title: String,
  content: String
});

export const File: Model<IFileModel> = model<IFileModel>("File", FileSchema);