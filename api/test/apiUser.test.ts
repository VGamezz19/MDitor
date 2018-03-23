import { UserApi } from "../src";

import mongoose from "mongoose";

import "jest";

const logicUser = new UserApi("http", "localhost", "5050");

let n, s, e, u, p;

let count = 0;

let tokenTest;

afterAll(async (done) => {

    await require("./db");

    done();
});

beforeEach(() => {
    n = `nameTest ${count++}`;
    s = `surnameTest ${count++}`;
    e = `emailTest ${count++}`;
    u = `usernameTest ${count++}`;
    p = `passwordTest ${count++}`;
});

describe("UserApi Class", () => {
    const protocol = "https";
    const host = "google.com";
    const port = "45564";

    const logicPRODUser = new UserApi(protocol, host);
    const logicUATUser = new UserApi(protocol, host, port);

    expect(logicPRODUser).toBeInstanceOf(UserApi);

    expect(logicPRODUser.baseurl).toBeDefined();

    expect(logicPRODUser.protocol).toBeDefined();

    expect(logicPRODUser.host).toBeDefined();

    expect(logicPRODUser.port).not.toBeDefined();

    expect(logicUATUser).toBeInstanceOf(UserApi);

    expect(logicUATUser.baseurl).toBeDefined();

    expect(logicUATUser.protocol).toBeDefined();

    expect(logicUATUser.host).toBeDefined();

    expect(logicUATUser.port).toBeDefined();

});

describe("api User bussines", () => {

    test("Should create new User", (done) => {

        logicUser.create(n, s, e, u, p)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });

    test("Should throw an KO Usere already exist", (done) => {

        logicUser.create(n, s, e, u, p)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                expect(res.status).toEqual("OK");

                return logicUser.create(n, s, e, u, p);
            })
            .then(res => {
                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.error).toBeDefined();

                expect(res.error).toEqual("username already exists");

                expect(res.status).toEqual("KO");

                done();
            });
    });

    test("Should throw an KO mandatory props", (done) => {

        logicUser.create("", "", "", "", "")
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.error).toBeDefined();

                expect(res.error).toEqual("name cannot be undefined or empty");

                expect(res.status).toEqual("KO");

                done();
            });
    });

    test("Should login an User", (done) => {

        logicUser.create(n, s, e, u, p)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                expect(res.status).toEqual("OK");

                return logicUser.login(u, p);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });

    test("Should throw an KO user or/and password wrong", (done) => {

        logicUser.create(n, s, e, u, p)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                expect(res.status).toEqual("OK");

                return logicUser.login("random", p);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.error).toBeDefined();

                expect(res.error).toEqual("Error: username or/and password wrong");

                expect(res.status).toEqual("KO");

                return logicUser.login("random", "random");
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.error).toBeDefined();

                expect(res.error).toEqual("Error: username or/and password wrong");

                expect(res.status).toEqual("KO");

                return logicUser.login(u, "random");
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.error).toBeDefined();

                expect(res.error).toEqual("Error: username or/and password wrong");

                expect(res.status).toEqual("KO");

                done();
            });
    });

    test("Should retrieve an User", (done) => {

        logicUser.create(n, s, e, u, p)
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.token).toBeDefined();

                tokenTest = res.data.token;

                expect(res.status).toEqual("OK");

                return logicUser.retrieve(tokenTest);
            })
            .then(res => {

                expect(res).toBeDefined();

                expect(res.status).toBeDefined();

                expect(res.data).toBeDefined();

                expect(res.data.username).toEqual(u);

                expect(res.data.name).toEqual(n);

                expect(res.data.email).toEqual(e);

                expect(res.data.surname).toEqual(s);

                expect(res.data.password).not.toBeDefined();

                expect(res.status).toEqual("OK");

                done();
            });
    });

});