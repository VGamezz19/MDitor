import { validate } from "../src/logic";
import "jest";


// function validate(item: any): void | never {
//     for (const prop in item) {
//         const value = item[prop];

//         if (typeof value === "undefined") throw Error(`${prop} cannot be undefined or empty`);

//         if (typeof value === "string")  if (!value.trim().length) throw Error(`${prop} cannot be undefined or empty`);

//     }
//     return;
// }

// export { validate };

describe("function Validate", () => {

    test("Should exist", () => {

        expect(validate);

        expect(validate).toBeInstanceOf(Function);
    });

    test("Should throw an Error", () => {

        const valueUndefined = undefined;

        const valueString = "";

        const valueStringSpaces = "     ";

        // tslint:disable-next-line:no-null-keyword
        const valueNull = null;

        const valueEmptyArray = [];

        const valueEmptyObject = {};

        const valueFunction = function hello() { };

        expect(function () { validate(valueUndefined); }).toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueString); }).toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueStringSpaces); }).toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueNull); }).toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueEmptyArray); }).toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueEmptyObject); }).not.toThrow("validate(item: Object{}) only use Objects");

        expect(function () { validate(valueFunction); }).toThrow("validate(item: Object{}) only use Objects");
    });
});