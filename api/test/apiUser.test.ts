import { UserAPI } from "../src";

import mongoose from "mongoose";

import "jest";

const logicUser = new UserAPI("http", "localhost", "5050");

describe("api User bussines", () => {

    test("Should create new User", (done) => {

        logicUser.create("u", "s", "e", "uA45545ssassasssssssPssssssssssI", "p")
            .then(res => {

                expect(res);

                expect(res.status);

                expect(res.data);

                expect(res.data.token);

                expect(res.status).toEqual("OK");

                done();
            });
    });
});