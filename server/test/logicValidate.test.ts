import { validate } from "../src/logic";
import "jest";

describe("function Validate", () => {

    test("Should exist", () => {

        expect(validate);

        expect(validate).toBeInstanceOf(Function);
    });

    test("Should throw an Error when enter no Object", () => {

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

    test("Should throw an Error when enter correct Object {} with invalid prop", () => {

        const objectValueUndefined = {
            undefinedProp: undefined
        };

        const objectValueString = {
            stringProp: ""
        };

        const objectValueStringSpace = {
            stringSpaceProp: "    "
        };

        expect(function () { validate(objectValueUndefined); }).toThrow(`undefinedProp cannot be undefined or empty`);

        expect(function () { validate(objectValueString); }).toThrow(`stringProp cannot be undefined or empty`);

        expect(function () { validate(objectValueStringSpace); }).toThrow(`stringSpaceProp cannot be undefined or empty`);
    });

    test("Shouldn't return an Error", () => {
        const correctObjectValidate = {
            object: {},
            array: [],
            string: "asdsad",
            number: 234324,
            data: new Date()
        };

        expect(validate(correctObjectValidate));
    });
});