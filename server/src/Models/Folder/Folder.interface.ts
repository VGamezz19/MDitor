import { Document } from "mongoose";
import { IFileModel } from "../File";

export interface IFolderModel extends Document {
    title: String;
    files: Array<IFileModel>;
}