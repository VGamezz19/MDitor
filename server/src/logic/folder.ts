import { User, File, Folder, IFolderModel, IUserModel } from "../models";
import { validate } from "./validate";
import mongoose = require("mongoose");

/**
 * folder logic (bussines manager) Object (logic)
 *
 * Defined a logic to manager Folder Data.
 *
 * @version 1.0.0
 */
const folder = {

    /**
     * Create a Folder
     *
     * You need userId becouse Folder is a populate of User. User {one} - Folder {to many} ralation
     *
     * @param {mongoose.Types.ObjectId} userId - The id of the user
     *
     * @param {String} title - The title of the new Folder
     *
     * @returns {Promise<mongoose.Types.ObjectId> | never} folder._id - The id from new Folder
     *
     * @throws {Error} - If not valid id or title not found
     */
    create: function createFile(userId: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ userId, title });

                return User.findById({ _id: userId });
            })
            .then(async (user: IUserModel) => {

                const folder = await Folder.create({ title, content: "", user: user._id });

                user.folders.push(folder._id);

                await user.save();

                return folder._id;
            });
    },

    /**
     *
     * Update a Folder
     *
     * @param {mongoose.Types.ObjectId} _id - The id of the folder
     *
     * @param {String} title - The title to update File
     *
     * @returns {Promise<mongoose.Types.ObjectId> | never} folder._id - The id from updated Folder
     *
     * @throws {Error} - If not valid _id, title not found
     */
    update: function updateFolder(_id: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ _id, title });

                return Folder.findOneAndUpdate({ _id }, { title });
            })
            .then(folder => folder._id);
    },

    /**
     *
     * Retrieve a Folder
     *
     * @param {mongoose.Types.ObjectId} _id - The id of the folder
     *
     * @returns {Promise<{}> | never} populate Folder with files content
     *
     * @throws {Error} - If not valid _id not found
     */
    retrieve: function retrieveFolder(_id: mongoose.Types.ObjectId): Promise<{}> | never {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return Folder.findById({ _id });
            })
            .then(folder => {

                return File.populate(folder, { path: "files", select: "title" });
            });
    },

    /**
     *
     * List a Folder
     *
     * @returns {Promise<IFolderModel[]>} Array of Folder Model
     */
    list: function listFolder(): Promise<IFolderModel[]> {

        return Folder.find({}).populate({ path: "files" }).exec();
    },

    /**
     *
     * Delete a Folder
     *
     * @param {mongoose.Types.ObjectId} _id - The id of the folder
     *
     * @returns {Promise<mongoose.Types.ObjectId> | never} folder._id - The id from delete Folder
     *
     * @throws {Error} - If not valid _id not found
     */
    delete: function deleteFolder(_id: mongoose.Types.ObjectId): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ _id });

                return Folder.findById({ _id });
            })
            .then( async (folder) => {

                if (!folder) throw Error("cannot delete folder if doesn't exist");

                await User.update({ _id: folder.user }, { $pull: { folders: _id } });

                await File.deleteMany({ _id: folder.files });

                await Folder.remove(folder);

                return folder._id;
            });
    }
};

export { folder };