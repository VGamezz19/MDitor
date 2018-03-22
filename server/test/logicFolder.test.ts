import { logic } from "../src/logic";
import { File, User, Folder, IFolder, IFolderModel } from "../src/models";
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

    masterUsertTestID = await logic.user.register("user", "surname", "email", "adminUATFolders", "adminUATPass");

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

describe("Logic Folder", () => {

    const title = "new Folder Test Jest";

    test("Should create Folder", (done) => {
        const title = "new Folder Test Jest";

        return logic.folder.create(masterUsertTestID, title)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                done();
            });
    });
    test("Should retrieve Folder", (done) => {

        const title = "new Folder Test Jest";

        return logic.folder.create(masterUsertTestID, title)
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

    test("Should update Folder", (done) => {

        const title = "new Folder Test Jest";

        let oldFolder;

        return logic.folder.create(masterUsertTestID, title)
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

    test("Should list Folders", (done) => {

        //  mongoose.connection.db.collection("folders").drop();

        const title1 = "New Folder 1 ";

        const title2 = "New Folder 2 ";

        let masterFolder;

        let masterFolder2;

        return logic.folder.create(masterUsertTestID, title1)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.folder.retrieve(id);
            })
            .then((folder: IFolderModel) => {

                masterFolder = folder;

                expect(masterFolder).toEqual(folder);

                expect(folder);

                expect(folder.title);

                expect(typeof (folder.title)).toEqual("string");

                expect(folder.files);

                expect(folder.files).toBeInstanceOf(Array);

                expect(folder._id);

                expect(folder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folder).toBeInstanceOf(Folder);

                return logic.folder.create(masterUsertTestID, title2);
            })
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.folder.retrieve(id);
            })
            .then((folder: IFolderModel) => {

                masterFolder2 = folder;

                expect(masterFolder2).toEqual(folder);

                expect(folder);

                expect(folder.title);

                expect(typeof (folder.title)).toEqual("string");

                expect(folder.files);

                expect(folder.files).toBeInstanceOf(Array);

                expect(folder._id);

                expect(folder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folder).toBeInstanceOf(Folder);

                return folder;
            })
            .then(() => {

                expect(masterFolder._id);

                expect(masterFolder._id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.file.create(masterFolder._id, "new File Folder1");
            })
            .then(() => {

                return logic.file.create(masterFolder._id, "2cond new File Folder 1");
            })
            .then(() => {

                expect(masterFolder2._id);

                expect(masterFolder2._id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.file.create(masterFolder2._id, "new File Folder 2");
            })
            .then(() => {

                return logic.file.create(masterFolder2._id, "2cond New File Folder 2");
            })
            .then(() => {

                return logic.folder.list();
            })
            .then((folders: Array<IFolderModel>) => {

                expect(folders).toBeInstanceOf(Array);

                expect(folders[3]);

                expect(folders[3].title);

                expect(typeof (folders[3].title)).toEqual("string");

                expect(folders[3].files);

                expect(folders[3].files).toBeInstanceOf(Array);

                expect(folders[3]._id);

                expect(folders[3]._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folders[3]).toBeInstanceOf(Folder);

                expect(folders[4]);

                expect(folders[4].title);

                expect(typeof (folders[4].title)).toEqual("string");

                expect(folders[4].files);

                expect(folders[4].files).toBeInstanceOf(Array);

                expect(folders[4]._id);

                expect(folders[4]._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folders[4]).toBeInstanceOf(Folder);

                expect(folders).toHaveLength(5);

                expect(folders[3].files).toHaveLength(2);

                expect(folders[3].files[0].title);

                expect(folders[3].files[1].title);

                expect(folders[3].files[0].content);

                expect(folders[3].files[1].content);

                expect(folders[3].files[0]._id);

                expect(folders[3].files[1]._id);

                expect(folders[3].files[0]).toBeInstanceOf(File);

                expect(folders[4].files[0].title);

                expect(folders[4].files[1].title);

                expect(folders[4].files[0].content);

                expect(folders[4].files[1].content);

                expect(folders[4].files[0]._id);

                expect(folders[4].files[1]._id);

                expect(folders[4].files[1]).toBeInstanceOf(File);

                expect(folders[4].files).toHaveLength(2);

                done();
            });
    });

    test("Should remove Folders and populate Files", (done) => {

        let masterFolder1;

        let masterFolder2;

        let fileId1;

        let fileId2;

        return logic.folder.list()
            .then((folders: Array<IFolderModel>) => {

                expect(folders).toBeInstanceOf(Array);

                expect(folders[3]);

                expect(folders[3].title);

                expect(typeof (folders[3].title)).toEqual("string");

                expect(folders[3].files);

                expect(folders[3].files).toBeInstanceOf(Array);

                expect(folders[3]._id);

                expect(folders[3]._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folders[3]).toBeInstanceOf(Folder);

                expect(folders[4]);

                expect(folders[4].title);

                expect(typeof (folders[4].title)).toEqual("string");

                expect(folders[4].files);

                expect(folders[4].files).toBeInstanceOf(Array);

                expect(folders[4]._id);

                expect(folders[4]._id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(folders[4]).toBeInstanceOf(Folder);

                expect(folders).toHaveLength(5);

                expect(folders[3].files).toHaveLength(2);

                expect(folders[3].files[0].title);

                expect(folders[3].files[1].title);

                expect(folders[3].files[0].content);

                expect(folders[3].files[1].content);

                expect(folders[3].files[0]._id);

                expect(folders[3].files[1]._id);

                expect(folders[3].files[0]).toBeInstanceOf(File);

                expect(folders[4].files[0].title);

                expect(folders[4].files[1].title);

                expect(folders[4].files[0].content);

                expect(folders[4].files[1].content);

                expect(folders[4].files[0]._id);

                expect(folders[4].files[1]._id);

                expect(folders[4].files[1]).toBeInstanceOf(File);

                expect(folders[4].files).toHaveLength(2);

                masterFolder1 = folders[3];

                masterFolder2 = folders[4];

                fileId1 = masterFolder1.files[0]._id;

                fileId2 = masterFolder1.files[1]._id;

                return logic.folder.delete(masterFolder1._id);
            })
            .then(async (id) => {
                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                expect(id).toEqual(masterFolder1._id);

                try {

                    const tryToDeleteFoldernOtherTime = await logic.folder.delete(id);

                } catch (e) {

                    expect(e).toEqual(new Error("cannot delete folder if doesn't exist"));

                }

                return logic.folder.list();
            })
            .then(folders => {

                expect(folders).toHaveLength(4);

                return logic.file.retrieve(fileId1);
            })
            .then(file => {

                expect(!file);

                return logic.file.retrieve(fileId2);
            })
            .then(file => {

                expect(!file);

                done();
            });
    });
});