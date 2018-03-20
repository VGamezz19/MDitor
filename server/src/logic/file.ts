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
            .then(folder => {
                // console.log("creating-file ....", folder);
                const file = new File({ title });

                folder.files.push(file._id);

                file.save();
                folder.save();

                return file._id;
            });
    },

    update: function updateFile(_id: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ _id, title });
                return File.findOneAndUpdate({ _id }, { title });
            })
            .then(file => file._id);
    }
};

export { file, validate };