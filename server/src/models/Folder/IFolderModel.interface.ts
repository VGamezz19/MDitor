import { Document, Types } from "mongoose";

import { IFileModel } from "../File";

import { IFolder } from "./IFolder.interface";

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