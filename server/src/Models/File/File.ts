import { Document, Schema, Model, model } from "mongoose";

export const FileSchema: Schema = new Schema({
  id: String,
  title: String,
  content: String,
  folder: { type: Schema.Types.ObjectId, ref: "Folder" }
});

export const FileModel = model("File", FileSchema);