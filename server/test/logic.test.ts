import chai from "chai";
import { logic, validate } from "../src/logic";
import { Folder, IFolder, IFolderModel } from "../src/Models";
import mongoose from "mongoose";
import "jest";

beforeAll(() => {

    require("./db");

    mongoose.connection.once("connected", () => {

        if (process.env.MONGO_DB_TEST === "MDitor") {

            mongoose.disconnect();

            throw new Error("!ERROR: You can't run this test in MDitor Database, you should use MDitor-Test Database");
        }

        mongoose.connection.db.collection("folders").drop();
    });
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
});

describe("MongoDB, there is some error?", () => {

    test("Should no throw Error", (done) => {

        mongoose.connection.on("error", function (err) {

            expect(!err);

        });
        setTimeout(() => done(), 4966);
    });
});

describe("function Validate", () => {

    test("Should exist", () => {

        expect(validate);
    });
});

describe("Logic Folder", () => {

    const title = "new Folder Test Jest";

    test("Should create new Folder", (done) => {
        const title = "new Folder Test Jest";

        return logic.folder.create(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                done();
            });
    });
    test("Should list folder", (done) => {

        const title = "new Folder Test Jest";

        return logic.folder.create(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.folder.retrieve(id);
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

        return logic.folder.create(title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.folder.retrieve(id);
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

                return logic.folder.update(folder._id, "newString Folder yeye");
            })
            .then((id) => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(oldFolder);

                expect(oldFolder.title);

                expect(typeof (oldFolder.title)).toEqual("string");

                expect(oldFolder.files);

                expect(oldFolder.files).toBeInstanceOf(Array);

                expect(oldFolder._id);

                expect(oldFolder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(oldFolder).toBeInstanceOf(Folder);

                return logic.folder.retrieve(id);
            }).
            then((folder: IFolderModel) => {

                expect(folder._id).toEqual(oldFolder._id);

                expect(folder).not.toEqual(oldFolder);

                expect(oldFolder.title).not.toEqual(folder.title);

                done();
            });
    });

});