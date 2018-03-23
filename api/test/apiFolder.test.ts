import { FolderApi, UserApi } from "../src";

import mongoose from "mongoose";

import "jest";

const logicFolder = new FolderApi("http", "localhost", "5050");

let tokenTest;

beforeAll(async (done) => {
    const logicUserAPI = new UserApi("http", "localhost", "5050");

    await logicUserAPI.create("name", "surname", "email", "adminUATFolders", "pas123")
        .then(res => {
            tokenTest = res.data.token;
        });

    done();
});

afterAll(async (done) => {

    await require("./db");

    done();
});

describe("api Folder bussines", () => {

    test("Should create new Folder", (done) => {

        logicFolder.create("Testing Folder!", tokenTest)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.id).toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });

    test("Should retrieve Folder", (done) => {

        let idFolder;

        logicFolder.create("Testing Folder!", tokenTest)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.id).toBeDefined();

                expect(res.status).toEqual("OK");

                idFolder = res.data.id;

                return logicFolder.retrieve(idFolder, tokenTest);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Object);

                expect(res.data._id).toBeDefined();

                expect(res.data.title).toBeDefined();

                expect(res.data.files).toBeDefined();

                expect(res.status).toEqual("OK");

                expect(res.data._id).toEqual(idFolder);

                done();
            });
    });

    test("Should update Folder", (done) => {

        let oldFolder;

        logicFolder.create("Testing Folder!", tokenTest)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.id).toBeDefined();

                expect(res.status).toEqual("OK");

                return logicFolder.retrieve(res.data.id, tokenTest);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Object);

                expect(res.data._id).toBeDefined();

                expect(res.data.title).toBeDefined();

                expect(res.data.files).toBeDefined();

                expect(res.status).toEqual("OK");

                oldFolder = res.data;

                return logicFolder.update(res.data._id, "new updatedTitle", tokenTest);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

               // expect(res.data).toBeDefined();

                // expect(res.data.id).toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });

    test("Should delete Folder", (done) => {

        logicFolder.create("Testing Folder!", tokenTest)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.id).toBeDefined();

                expect(res.status).toEqual("OK");

                return logicFolder.remove(res.data.id, tokenTest);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });
});