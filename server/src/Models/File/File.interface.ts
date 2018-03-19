import { Document } from "mongoose";

export interface IFileModel extends Document {
    title: String;
    content: String;
}