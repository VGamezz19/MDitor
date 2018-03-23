import { FolderApi, FileApi, UserApi } from "../src";

import mongoose from "mongoose";

import "jest";

const logicFile = new FileApi("http", "localhost", "5050");

const logicFolder = new FolderApi("http", "localhost", "5050");

let tokenTest;

beforeAll(async (done) => {
    const logicUserAPI = new UserApi("http", "localhost", "5050");

    await logicUserAPI.create("name", "surname", "email", "adminUATFiles", "pas123")
        .then(res => {
            tokenTest = res.data.token;
        });

    done();
});

afterAll(async (done) => {

    await require("./db");

    await mongoose.connection.db.dropCollection("users");

    done();
});

describe("api File bussines", () => {

    test("Should create new File", (done) => {
        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {
                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        done();
                    });
            });
    });

    test("Should retrieve File", (done) => {

        let idFile;

        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {
                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        idFile = res.data.id;

                        return logicFile.retrieve(idFile, tokenTest);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data).toBeInstanceOf(Object);

                        expect(res.data._id).toBeDefined();

                        expect(res.data.title).toBeDefined();

                        expect(res.data.content).toBeDefined();

                        expect(res.status).toEqual("OK");

                        expect(res.data._id).toEqual(idFile);

                        done();
                    });
            });
    });

    test("Should update title File", (done) => {

        let oldFile;

        const updateTitle = "titleUpdated";

        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {
                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        return logicFile.retrieve(res.data.id, tokenTest);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data).toBeInstanceOf(Object);

                        expect(res.data._id).toBeDefined();

                        expect(res.data.title).toBeDefined();

                        expect(res.data.content).toBeDefined();

                        expect(res.status).toEqual("OK");

                        oldFile = res.data;

                        return logicFile.update(res.data._id, tokenTest, updateTitle);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.status).toEqual("OK");

                        done();
                    });
            });
    });

    test("Should update  content File", (done) => {

        let oldFile;

        const updateContent = "updatedContent";

        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {
                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        return logicFile.retrieve(res.data.id, tokenTest);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data).toBeInstanceOf(Object);

                        expect(res.data._id).toBeDefined();

                        expect(res.data.title).toBeDefined();

                        expect(res.data.content).toBeDefined();

                        expect(res.status).toEqual("OK");

                        oldFile = res.data;

                        return logicFile.update(res.data._id, tokenTest, undefined, updateContent);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.status).toEqual("OK");

                        done();
                    });
            });
    });

    test("Should update content and title File", (done) => {

        let oldFile;

        const updateTitle = "titleUpdated";

        const updateContent = "updatedContent";

        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {
                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        return logicFile.retrieve(res.data.id, tokenTest);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data).toBeInstanceOf(Object);

                        expect(res.data._id).toBeDefined();

                        expect(res.data.title).toBeDefined();

                        expect(res.data.content).toBeDefined();

                        expect(res.status).toEqual("OK");

                        oldFile = res.data;

                        return logicFile.update(res.data._id, tokenTest, updateTitle, updateContent);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.status).toEqual("OK");

                        done();
                    });
            });
    });

    test("Should delete File", (done) => {

        logicFolder.create("newFolderTesting", tokenTest)
            .then(res => {

                logicFile.create(res.data.id, "Testing File!", tokenTest)
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.data).toBeDefined();

                        expect(res.data.id).toBeDefined();

                        expect(res.status).toEqual("OK");

                        return logicFile.remove(res.data.id, tokenTest);
                    })
                    .then(res => {

                        expect(res).toBeDefined();

                        expect(res.status).toBeDefined();

                        expect(res.status).toEqual("OK");

                        done();
                    });

            });
    });
});