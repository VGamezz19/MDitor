import { Document } from "mongoose";

import { IFolderModel } from "../Folder";

import { IUser } from "./IUser.interface";


/**
 * User Modal, interface (contract) extends IUser
 *
 * Defines contrat to use type of data User
 *
 * @version 1.0.0
 */
export interface IUserModel extends IUser, Document {
    folders: Array<IFolderModel>;
}