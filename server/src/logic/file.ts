import { File, Folder, IFileModel } from "../models";
import { validate } from "./validate";
import mongoose = require("mongoose");

/**
 * file logic (bussines manager) Object (logic)
 *
 * Defined a logic to manager File Data.
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
     * @returns {Promise<mongoose.Types.ObjectId> | never} file._id - The id from new File
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

                const file = await File.create({ title, content: "", folder: folder._id });

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
     * @returns {Promise<mongoose.Types.ObjectId> | never} file._id - The id from updated File
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
     * @returns {Promise<IFileModel> | never} IFileModel
     *
     * @throws {Error} - If not valid id not found
     */
    retrieve: function retrieveFile(_id: mongoose.Types.ObjectId): Promise<IFileModel> | never {
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
     * @returns {mongoose.DocumentQuery<IFileModel[], IFileModel>} Array of IFileModel
     */
    list: function listFile(): mongoose.DocumentQuery<IFileModel[], IFileModel> {

        return File.find();
    },

    /**
     *
     * Delete File
     *
     * When you delete some File, also, her populate Folder delete to.
     *
     * @param {String} _id - The id of the file to delete
     *
     * @returns {Promise<mongoose.Types.ObjectId> | never} file._id - The id from delete File
     *
     * @throws {Error} - If not valid id not found
     */
    delete: function deleteFile(_id: mongoose.Types.ObjectId): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return File.findOneAndRemove({ _id });
            })
            .then(async (file: IFileModel) => {

                if (!file) throw Error("cannot delete file if doesn't exist");

                await Folder.update({ _id: file.folder }, { $pull: { files: _id } });

                return file._id;
            });
    }
};

export { file, validate };