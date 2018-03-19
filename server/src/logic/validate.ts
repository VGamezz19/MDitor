import { IFile, IFolder } from "../Models";

/**
 * validate File/Folder;
 * @param item
 */
function validate(item: any): void | never {
    for (const prop in item) {
        const value = item[prop];

        if (typeof value === "undefined") throw Error(`${prop} cannot be undefined or empty`);

        if (typeof value === "string")  if (!value.trim().length) throw Error(`${prop} cannot be undefined or empty`);

    }
    return;
}

export { validate };