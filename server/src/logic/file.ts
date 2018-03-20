import { File, Folder, IFolder, IFile, IFileModel } from "../Models";

import { validate } from "./validate";
import mongoose = require("mongoose");

/**
 * file logic (bussines manager) Object (logic)
 *
 * Defined a logic with manager File Data.
 *
 * @version 1.0.0
 */
const file = {

    /**
     * Create a File
     *
     * You need folderID becouse Filse is a populate of Folder. Folder {one} - File {to many} ralation
     *
     * @param {mongoose.Types.ObjectId} folderId - The id of the folder
     *
     * @param {String} title - The title of the new File
     *
     * @returns {mongoose.Types.ObjectId} file._id - The id from new File
     *
     * @throws {Error} - If not valid id or title not found
     */
    create: function createFile(folderId: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ folderId, title });

                return Folder.findById({ _id: folderId });
            })
            .then(async (folder) => {

                const file = await File.create({ title, content: "" });

                folder.files.push(file._id);

                await folder.save();

                return file._id;
            });
    },

    /**
     *
     * Update a File
     *
     * @param {mongoose.Types.ObjectId} _id - The id of the file
     *
     * @param {String} title - The title to update File
     *
     * @param {String} content - The content to update File
     *
     * @returns {mongoose.Types.ObjectId} file._id - The id from updated File
     *
     * @throws {Error} - If not valid id, title or content not found
     */
    update: function updateFile(_id: mongoose.Types.ObjectId, title?: string, content?: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                const twoParameter = title && content;

                if (twoParameter) {
                    return File.findOneAndUpdate({ _id }, { title, content });
                }

                if (title) {
                    return File.findOneAndUpdate({ _id }, { title });
                }

                if (content) {
                    return File.findOneAndUpdate({ _id }, { content });
                }

                throw new Error("file.update need something to do Update [update(_id: ObjectId, title?: string, content?: string)]");
            })
            .then(file => file._id);
    },

    /**
     *
     * Retrieve a File
     *
     * @param {mongoose.Types.ObjectId} _id - The id of the file
     *
     * @returns {IFileModule} IFileModel
     *
     * @throws {Error} - If not valid id not found
     */
    retrieve: function retrieveFile(_id: mongoose.Types.ObjectId) {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return File.findById({ _id });
            });
    },

    /**
     *
     * List Files
     *
     * @returns {Array<IFileModule>} Array of IFileModel
     */
    list: function listFile() {

        return File.find();
    },

    /**
     *
     * Delete File
     *
     * When you delete some File, also, her populate Folder delete to.
     *
     * @param {mongoose.Types.ObjectId} folderId - The id of the folder
     *
     * @param {String} _id - The id of the file to delete
     *
     * @returns {mongoose.Types.ObjectId} file._id - The id from delete File
     *
     * @throws {Error} - If not valid id not found
     */
    delete: function deleteFile(folderId: mongoose.Types.ObjectId, _id: mongoose.Types.ObjectId) {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return File.remove({ _id });
            })
            .then(() => {

                return Folder.update({ _id: folderId }, { $pull: { files: _id } });
            })
            .then(() => _id);
    }
};

export { file, validate };