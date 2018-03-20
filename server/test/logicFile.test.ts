import { validate } from "../src/logic";
import "jest";

describe("Logic FIle", () => {

    test("Should exist", () => {

        expect(validate);

        expect(validate).toBeInstanceOf(Function);
    });
});