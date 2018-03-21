import { Document, Types } from "mongoose";
import { IFileModel } from "../File";

/**
 * Folder Data, interface (contract)
 *
 * Defines contrat to use type of data Folder
 *
 * @version 1.0.0
 */
export interface IFolder {
    title: String;
}

/**
 * Folder Modal, interface (contract) extends IFolder
 *
 * Defines contrat to use type of data Folder
 *
 * @version 1.0.0
 */
export interface IFolderModel extends IFolder, Document {
    title: String;
    files: Array<IFileModel>;
    user: Types.ObjectId;
}