import { File, Folder, IFolder, IFile, IFileModel } from "../Models";

import { validate } from "./validate";
import mongoose = require("mongoose");

const file = {
    create: function createFile(folderId: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ folderId, title });
                return Folder.findById({ _id: folderId });
            })
            .then(async (folder) => {

                const file = new File({ title, content: "" });

                folder.files.push(file._id);

                await file.save();
                await folder.save();

                return file._id;
            });
    },

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

    retrieve: function retrieveFile(_id: mongoose.Types.ObjectId) {
        return Promise.resolve()
            .then(() => {
                validate({ _id });
                return File.findById({ _id });
            });
    },

    list: function listFile() {
        return File.find();
    },

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