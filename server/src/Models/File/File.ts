import { Schema, Model, model } from "mongoose";
import { IFileModel } from "./File.interface";

export const FileSchema: Schema = new Schema({
  title: String,
  content: String
});

export const File: Model<IFileModel> = model<IFileModel>("File", FileSchema);