import { Document, Types } from "mongoose";

import { IFile } from "./IFile.interfaces";

/**
 * File Modal, interface (contract) extends IFile
 *
 * Defines contrat to use type of data File
 *
 * @version 1.0.0
 */
export interface IFileModel extends IFile, Document {
    folder: Types.ObjectId;
}
