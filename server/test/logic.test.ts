import chai from "chai";
import { logic } from "../src/logic";
import { Folder, IFolder, IFolderModel } from "../src/Models";
import mongoose from "mongoose";
import "jest";

beforeAll(() => {
    require("./db");
    mongoose.connection.once("connected", () => mongoose.connection.db.collection("folders").drop());
});

afterAll(() => {
    mongoose.disconnect();
});

describe(".env", () => {
    test("Should exist", () => {

        expect(process.env.MONGO_HOST_TEST);

        expect(process.env.MONGO_PORT_TEST);

        expect(process.env.MONGO_DB_TEST);

    });
    test("Should match the same value", () => {

        const mongo = {
            host: process.env.MONGO_HOST_TEST,
            port: process.env.MONGO_PORT_TEST,
            database: process.env.MONGO_DB_TEST,
        };

        expect(process.env.MONGO_HOST_TEST).toEqual(mongo.host);

        expect(process.env.MONGO_PORT_TEST).toEqual(mongo.port);

        expect(process.env.MONGO_DB_TEST).toEqual(mongo.database);
    });
});

describe("Logic Folder", () => {

    const title = "new Folder Test Jest";

    test("Should create new Folder", (done) => {
        const title = "new Folder Test Jest";

        return logic.createFolder(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                done();
            });
    });
    test("Should list folder", (done) => {

        const title = "new Folder Test Jest";

        return logic.createFolder(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.listFolder(id);
            })
            .then((folder: IFolderModel) => {

                expect(folder);

                expect(folder.title);

                expect(typeof (folder.title)).toEqual("string");

                expect(folder.files);

                expect(folder.files).toBeInstanceOf(Array);

                expect(folder._id);

                expect(folder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folder).toBeInstanceOf(Folder);

                done();
            });
    });

    test("Should Update Folder", (done) => {

        const title = "new Folder Test Jest";

        let oldFolder;

        return logic.createFolder(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.listFolder(id);
            })
            .then((folder: IFolderModel) => {

                oldFolder = folder;

                expect(oldFolder).toEqual(folder);

                expect(folder);

                expect(folder.title);

                expect(typeof (folder.title)).toEqual("string");

                expect(folder.files);

                expect(folder.files).toBeInstanceOf(Array);

                expect(folder._id);

                expect(folder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folder).toBeInstanceOf(Folder);

                return logic.updateFolder(folder._id, "newString Folder yeye");
            })
            .then(({ ok }) => {

                expect(ok);

                expect(oldFolder);

                expect(oldFolder.title);

                expect(typeof (oldFolder.title)).toEqual("string");

                expect(oldFolder.files);

                expect(oldFolder.files).toBeInstanceOf(Array);

                expect(oldFolder._id);

                expect(oldFolder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(oldFolder).toBeInstanceOf(Folder);

                return logic.listFolder(oldFolder._id);
            }).
            then((folder: IFolderModel) => {

                expect(folder._id).toEqual(oldFolder._id);

                expect(folder).not.toEqual(oldFolder);

                expect(oldFolder.title).not.toEqual(folder.title);

                done();
            });
    });

});