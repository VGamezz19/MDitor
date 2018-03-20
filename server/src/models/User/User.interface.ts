import { Document } from "mongoose";
import { IFolderModel } from "../Folder";

/**
 * User Data, interface (contract)
 *
 * Defines contrat to use type of data User
 *
 * @version 1.0.0
 */
export interface IUser {
    name: String;
    surname: String;
    email: String;
    username: String;
    password: String;
}
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