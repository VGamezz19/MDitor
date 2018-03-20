import { Document, Types } from "mongoose";

/**
 * File Data, interface (contract)
 *
 * Defines contrat to use type of data File
 *
 * @version 1.0.0
 */
export interface IFile {
    title: String;
    content: String;
}

/**
 * File Modal, interface (contract) extends IFile
 *
 * Defines contrat to use type of data File
 *
 * @version 1.0.0
 */
export interface IFileModel extends IFile, Document {
    title: String;
    content: String;
    folder: Types.ObjectId;
}
