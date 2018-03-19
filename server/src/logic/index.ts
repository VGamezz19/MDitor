import { Schema } from "mongoose";
import { File, Folder, IFolder, IFile } from "../Models";
import { validate } from "./validate";
import mongoose = require("mongoose");

// export class ObjectId implements mongoose.Types.ObjectId {}
const logic = {
    createFolder: function createFolder(title: string): Promise<mongoose.Types.ObjectId> {
        return Promise.resolve()
            .then(() => {
                validate({ title });

                return Folder.create({ title, files: [] });
            })
            .then(folder => folder._id);
    },

    createFile: function createFile(folderId: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {

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

    updateFolder: function updateFolder(_id: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ _id, title });
                return Folder.updateOne({ _id }, { title });
            })
            .then(folder => folder._id);
    },

    updateFile: function updateFile(_id: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ _id, title });
                return File.updateOne({ _id }, { title });
            })
            .then(file => file._id);
    },

    listFolder: function listFolders(_id: mongoose.Types.ObjectId): Promise<{}> {
        return Promise.resolve()
            .then(() => {
                validate({ _id });
                return Folder.findById({ _id });
            })
            .then(folder => {
                return File.populate(folder, { path: "files", select: "title" });
            });
    }
};

// getEventsByUserId(userId) {
//     return new Promise((resolve, reject) => {
//         User.find({ _id: userId })
//             .then(user => {
//                 Event.populate(user, { path: 'events', select: 'company image subtitle title' })
//                     .then(resolve)
//             })
//             .catch(reject)
//     })
// },

export { logic };