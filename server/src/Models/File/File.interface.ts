import { Document } from "mongoose";


export interface IFile {
    title: String;
    content: String;
}


export interface IFileModel extends IFile, Document {
    title: String;
    content: String;
}
