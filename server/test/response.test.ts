import { success, fail } from "../src/config";

describe("success response", () => {

    test("Should exist", () => {

        expect(success);
    });

    test("Should return OK", () => {

        const res = success();

        expect(!res.data);

        expect(res).toEqual({ "status": "OK" });
    });

    test("Should return data", () => {

        const someData = 1234234434134312422423141243412341324324;

        const res = success(someData);

        expect(res).toEqual({ "status": "OK", "data": someData });
    });
});

describe("fail response", () => {

    test("Should exist", () => {

        expect(fail);
    });

    test("Should return KO", () => {

        const res = fail();

        expect(!res.error);

        expect(res).toEqual({ "status": "KO" });
    });

    test("Should return error", () => {

        const someError = "There is a big error....";

        const res = fail(someError);

        expect(res).toEqual({ "status": "KO", "error": someError });
    });
});