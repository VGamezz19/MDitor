import { Schema } from "mongoose";
import { File, Folder, IFolder } from "../Models";
import { validate } from "./validate";
import mongoose = require("mongoose");

// export class ObjectId implements mongoose.Types.ObjectId {}
const folder = {
    create: function createFolder(title: string): Promise<mongoose.Types.ObjectId> {
        return Promise.resolve()
            .then(() => {
                validate({ title });

                return Folder.create({ title, files: [] });
            })
            .then(folder => folder._id);
    },

    update: function updateFolder(_id: mongoose.Types.ObjectId, title: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {
                validate({ _id, title });
                return Folder.findOneAndUpdate({ _id }, { title });
            })
            .then(folder => folder._id);
    },

    retrieve: function retrieveFolder(_id: mongoose.Types.ObjectId): Promise<{}> {
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

export { folder, validate };

