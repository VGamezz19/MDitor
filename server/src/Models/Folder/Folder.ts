import { Document, Schema, Model, model } from "mongoose";
import * as File from "../File";

export const FolderSchema: Schema = new Schema({
  id: String,
  title: String,
  files: { type: Schema.Types.ObjectId, ref: "File" }
});

export const FolderModel = model("Folder", FolderSchema);