import { logic } from "../src/logic";
import { File, User, Folder, IFolder, IFolderModel, IFileModel } from "../src/models";
import mongoose from "mongoose";
import "jest";

let masterUsertTestID;

beforeAll(async (done) => {

    require("./db");

    mongoose.connection.once("connected", () => {

        if (process.env.MONGO_DB_TEST === "MDitor") {

            mongoose.disconnect();

            throw new Error("!ERROR: You can't run this test in MDitor Database, you should use MDitor-Test Database");
        }
    });

    masterUsertTestID = await logic.user.register("user", "surname", "email", "adminUATFiles", "adminUATPass");

    done();
});

afterAll(async (done) => {

    await mongoose.connection.db.dropCollection("users", async function (err, result) {
        if (err) done(err);
    });

    await mongoose.connection.db.dropCollection("folders", function (err, result) {
        if (err) done(err);
    });

    await mongoose.connection.db.dropCollection("files", function (err, result) {
        if (err) done(err);
    });

    mongoose.disconnect();
    done();
});


describe(".env", () => {

    test("Should exist", () => {

        expect(process.env.MONGO_HOST_TEST);

        expect(process.env.MONGO_PORT_TEST);

        expect(process.env.MONGO_DB_TEST);
    });
});

describe("Logic File", () => {

    const title = "new File Test Jest";

    test("Should create File", (done) => {
        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        let folderID;
        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                folderID = id;

                return logic.file.create(id, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                done();
            });
    });

    test("Should retrieve File", (done) => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        let folderID;

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                folderID = id;

                return logic.file.create(id, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                return logic.file.retrieve(fileId);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                done();
            });
    });

    test("Should update title File", (done) => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        const uptdateTitleFile = "updated Title File";

        let folderID;

        let oldFile;

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                folderID = id;

                return logic.file.create(id, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                return logic.file.retrieve(fileId);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                oldFile = file;

                return logic.file.update(file._id, uptdateTitleFile);
            })
            .then(id => {
                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(id).toEqual(oldFile._id);

                return logic.file.retrieve(id);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                expect(file.title).not.toEqual(oldFile.title);

                expect(file.title).toEqual(uptdateTitleFile);

                done();
            });
    });

    test("Should update content File", (done) => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        const updateContentFile = "new content updated # hola H1";

        let folderID;

        let oldFile;

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                folderID = id;

                return logic.file.create(id, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                return logic.file.retrieve(fileId);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                oldFile = file;

                return logic.file.update(file._id, undefined, updateContentFile);
            })
            .then(id => {
                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(id).toEqual(oldFile._id);

                return logic.file.retrieve(id);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                expect(file.content).not.toEqual(oldFile.content);

                expect(file.content).toEqual(updateContentFile);

                done();
            });
    });

    test("Should update content and title File", (done) => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        const updateContentFile = "new content updated # hola H1";

        const updateTitleFile = "new title update File";

        let folderID;

        let oldFile;

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                folderID = id;

                return logic.file.create(id, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                return logic.file.retrieve(fileId);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                oldFile = file;

                return logic.file.update(file._id, updateTitleFile, updateContentFile);
            })
            .then(id => {
                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(id).toEqual(oldFile._id);

                return logic.file.retrieve(id);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                expect(file.content).not.toEqual(oldFile.content);

                expect(file.content).toEqual(updateContentFile);

                expect(file.title).not.toEqual(oldFile.title);

                expect(file.title).toEqual(updateTitleFile);

                done();
            });
    });

    test("Should throw and Error when doesn't put content or title to update File", async () => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        let folderID;

        let oldFile;

        try {
            await logic.folder.create(masterUsertTestID, title)
                .then(id => {

                    expect(id);

                    expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                    folderID = id;

                    return logic.file.create(id, titleFile);
                })
                .then(fileId => {

                    expect(fileId);

                    expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                    expect(fileId).not.toEqual(folderID);

                    return logic.file.retrieve(fileId);
                })
                .then((file: IFileModel) => {

                    expect(file);

                    expect(file.title);

                    expect(typeof (file.title)).toEqual("string");

                    expect(file.content);

                    expect(typeof (file.content)).toEqual("string");

                    expect(file._id);

                    expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                    expect(file).toBeInstanceOf(File);

                    oldFile = file;

                    return logic.file.update(file._id);
                });
        } catch (e) {
            expect(e).toEqual(new Error("file.update need something to do Update [update(_id: ObjectId, title?: string, content?: string)]"));
        }
    });

    test("Should list Files", (done) => {

        return logic.file.list()
            .then(files => {

                expect(files).toBeInstanceOf(Array);

                expect(files[0]).toBeInstanceOf(File);

                expect(files.length).not.toBeLessThan(1);

                done();
            });
    });

    test("Should remove File and pull populate ID from Folder.files: Array<ObjectId>", (done) => {

        const titleFolder = "new Folder Test Jest";

        const titleFile = "new File Test Jest";

        let folderTest;

        let folderID;

        let fileTest;

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.folder.retrieve(id);
            })

            .then((folder: IFolderModel) => {

                folderTest = folder;

                folderID = folder._id;

                return logic.file.create(folderID, titleFile);
            })
            .then(fileId => {

                expect(fileId);

                expect(fileId).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileId).not.toEqual(folderID);

                return logic.file.retrieve(fileId);
            })
            .then((file: IFileModel) => {

                expect(file);

                expect(file.title);

                expect(typeof (file.title)).toEqual("string");

                expect(file.content);

                expect(typeof (file.content)).toEqual("string");

                expect(file._id);

                expect(file._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(file).toBeInstanceOf(File);

                // done();
                fileTest = file;

                return logic.file.delete(fileTest._id);
            })
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(fileTest._id).toEqual(id);

                return logic.file.retrieve(id);
            })
            .then(async file => {

                expect(!file);

                try {

                    const tryToDeleteFileAnOtherTime = await logic.file.delete(fileTest._id);

                } catch (e) {

                    expect(e).toEqual(new Error("cannot delete file if doesn't exist"));

                }

                return logic.folder.retrieve(folderID);
            })
            .then((folder: IFolderModel) => {

                expect(folder.files.length).toBeLessThanOrEqual(0);

                done();
            });
    });

});