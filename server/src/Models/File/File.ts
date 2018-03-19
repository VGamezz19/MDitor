import { Schema, Model, model } from "mongoose";
import { IFileModel } from "./File.interface";

export const FileSchema: Schema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  content: String,
  // folder: { type: Schema.Types.ObjectId, ref: "Folder" }
});

export const File: Model<IFileModel> = model<IFileModel>("File", FileSchema);