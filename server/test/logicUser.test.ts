import { logic } from "../src/logic";
import { File, Folder, User, IUserModel, IFolder, IFolderModel } from "../src/models";
import mongoose from "mongoose";
import "jest";

beforeAll(() => {

    require("./db");

    mongoose.connection.once("connected", () => {

        if (process.env.MONGO_DB_TEST === "MDitor") {

            mongoose.disconnect();

            throw new Error("!ERROR: You can't run this test in MDitor Database, you should use MDitor-Test Database");
        }
    });
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

describe("Logic User", () => {

    let count = 0;
    let n;
    let s;
    let e;
    let u;
    let p;

    beforeEach(() => {
        count++;
        n = `n${count}`;
        s = `s${count}`;
        e = `e${count}`;
        u = `u${count}`;
        p = `p${count}`;
    });

    test("Should create User", (done) => {

        return logic.user.register(n, s, e, u, p)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                done();
            });
    });

    test("Should retrieve User", (done) => {

        return logic.user.register(n, s, e, u, p)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.user.retrieve(id);
            })
            .then(async (user: IUserModel) => {

                expect(user).toBeInstanceOf(User);

                expect(user._id);

                expect(user.name).toEqual(n);

                expect(user.surname).toEqual(s);

                expect(user.email).toEqual(e);

                expect(user.username).toEqual(u);

                expect(!user.password);

                expect(user.password).toEqual(undefined);

                expect(user.folders).toBeInstanceOf(Array);

                try {

                    const objectId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId("5ab0dcea43d9e44090ae3246");

                    const tryToVerify = await logic.user.retrieve(objectId);

                } catch (e) {

                    expect(e).toEqual(new Error("user does not exist"));

                }

                done();
            });
    });

    test("Should verify User", (done) => {

        return logic.user.register(n, s, e, u, p)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.user.retrieve(id);
            })
            .then((user: IUserModel) => {

                expect(user);

                expect(user).toBeInstanceOf(User);

                expect(user._id);

                expect(user.name).toEqual(n);

                expect(user.surname).toEqual(s);

                expect(user.email).toEqual(e);

                expect(user.username).toEqual(u);

                expect(!user.password);

                expect(user.password).toEqual(undefined);

                return logic.user.verify(u, p);
            })
            .then(async (user) => {

                expect(user);

                expect(user).toBeInstanceOf(User);

                expect(user._id);

                expect(user.name).toEqual(n);

                expect(user.surname).toEqual(s);

                expect(user.email).toEqual(e);

                expect(user.username).toEqual(u);

                expect(!user.password);

                expect(user.password).toEqual(undefined);

                try {

                    const tryToVerify = await logic.user.verify(u, "random2");

                } catch (e) {

                    expect(e).toEqual(new Error("username and/or password wrong"));

                }

                try {

                    const tryToVerify = await logic.user.verify("random", "random2");

                } catch (e) {

                    expect(e).toEqual(new Error("username and/or password wrong"));

                }

                done();
            });
    });

    test("Should retrieve User with Folders", (done) => {

        let userTesting;

        let folderTesting;

        let fileTesting;

        return logic.user.register(n, s, e, u, p)
            .then(id => {

                expect(id);

                expect(id).toBeInstanceOf(mongoose.Types.ObjectId);

                return logic.user.retrieve(id);
            })
            .then(async (user: IUserModel) => {

                expect(user).toBeInstanceOf(User);

                expect(user._id);

                expect(user.name).toEqual(n);

                expect(user.surname).toEqual(s);

                expect(user.email).toEqual(e);

                expect(user.username).toEqual(u);

                expect(!user.password);

                expect(user.password).toEqual(undefined);

                expect(user.folders).toBeInstanceOf(Array);

                try {

                    const objectId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId("5ab0dcea43d9e44090ae3246");

                    const tryToVerify = await logic.user.retrieve(objectId);

                } catch (e) {

                    expect(e).toEqual(new Error("user does not exist"));

                }

                userTesting = user;

                return logic.folder.create(user._id, "new Folder in User");
            })
            .then(async (id) => {

                folderTesting = await logic.folder.retrieve(id);

                return logic.file.create(id, "some file");
            })
            .then(async (id) => {

                fileTesting = await logic.file.retrieve(id);

                return logic.user.retrieve(userTesting._id);
            })
            .then((user: IUserModel) => {

                expect(user);

                expect(user.folders.length).not.toBeLessThan(0);

                expect(user.folders.length).not.toBeLessThan(0);

                expect(user.folders[0].title).toEqual(folderTesting.title);

                expect(user.folders[0]._id).toEqual(folderTesting._id);

                expect(user.folders[0].files[0].title).toEqual(fileTesting.title);

                expect(user.folders[0].files[0]._id).toEqual(fileTesting._id);

                expect(user.folders[0].files[0].content).toEqual(fileTesting.content);

                done();
            });
    });

});