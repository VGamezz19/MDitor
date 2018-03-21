import { File, Folder, IFolder, IFolderModel } from "../models";
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
     *
     * Create Folder
     *
     * When you delete some File, also, her populate Folder delete to.
     *
     * @param {String} title - The title for new Folder
     *
     * @returns {Promise<mongoose.Types.ObjectId> | never } folder._id - The id from new Folder
     *
     * @throws {Error} - If not valid title not found
     */
    create: function createFolder(title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ title });

                return Folder.create({ title, files: [] });
            })
            .then(folder => folder._id);
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
            .then(folder => {

                if (!folder) throw new Error("cannot folder if doesn't exist");

                return File.deleteMany({ _id: folder.files })
                    .then(() => folder);
            })
            .then((folder) => {

                return Folder.remove(folder)
                    .then(() => folder);
            })
            .then(folder => folder._id);
    }
};

export { folder, validate };