import { validate } from "../src/logic";
import "jest";

describe("function Validate", () => {

    test("Should exist", () => {

        expect(validate);

        expect(validate).toBeInstanceOf(Function);
    });
});