/**
 * validate logic (bussines manager) Fucntion (logic)
 *
 * Defined a especific validate for File and Folder logic
 *
 * @version 1.0.0
 *
 * @param {Object} item - The item to validate
 *
 * @returns {boolena | never} IF all already ok, return true
 *
 * @throws {Error} - If not valid throw an Error
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