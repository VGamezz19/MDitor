import { Document } from "mongoose";
import { IFileModel } from "../File";

export interface IFolder {
    title: String;
    files: Array<IFileModel>;
}

export interface IFolderModel extends IFolder, Document {
    title: String;
    files: Array<IFileModel>;
}