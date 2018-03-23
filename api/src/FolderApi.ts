import { RequestPromiseApi } from "./RequestPromiseApi";

import { RequestPromise } from "request-promise";

import { IFolderApi } from "./interfaces";

/**
 * FolderApi, class (logic)
 *
 * Logic Folder API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicFolder just like this:
 *
 * const logicFolder = new FolderAPI("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class FolderApi extends RequestPromiseApi implements IFolderApi {

    constructor(protocol: ("http" | "https"), host: string, port?: string) {

        super(protocol, host, port);
    }

    /**
     *
     * Create new Folder
     *
     * @param {String} title name for new Folder
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    create(title: string, token: string): RequestPromise {

        return this.request("post", "api/folder", { title }, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Update Folder
     *
     * @param {String} id ObjectId to retrieve and update this Folder
     * @param {String} title new title to update
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    update(id: string, title: string, token: string): RequestPromise {

        return this.request("put", `api/folder/${id}`, { title }, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Retrieve Folder
     *
     * @param {String} id ObjectId to retrieve Folder
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    retrieve(id: string, token: string): RequestPromise {

        return this.request("get", `api/folder/${id}`, undefined, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Delete Folder
     *
     * @param {String} id ObjectId to delete Folder
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    remove(id: string, token: string): RequestPromise {

        return this.request("delete", `api/folder/${id}`, undefined, { "Authorization": "bearer " + token });
    }
}