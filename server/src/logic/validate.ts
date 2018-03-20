import { IFile, IFolder } from "../Models";

/**
 * validate File/Folder;
 * @param item
 */
function validate(item: any): boolean | never {

    const beAnObject = item instanceof Object && !(item instanceof Array) && !(item instanceof Function);

    if (!beAnObject || item instanceof Array) throw Error(`validate(item: Object{}) only use Objects and you entered ${item}`);

    for (const prop in item) {
        const value = item[prop];

        if (typeof value === "undefined") throw Error(`${prop} cannot be undefined or empty`);

        if (typeof value === "string") if (!value.trim().length) throw Error(`${prop} cannot be undefined or empty`);

    }
    return true;
}

export { validate };