import { RequestPromiseApi } from "./RequestPromiseApi";

import { RequestPromise } from "request-promise";

import { IFileApi } from "./interfaces";

/**
 * FileApi, class (logic)
 *
 * Logic File API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicFile just like this:
 *
 * const logicFile = new FileAPI("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class FileApi extends RequestPromiseApi implements IFileApi {

    constructor(protocol: ("http" | "https"), host: string, port?: string) {

        super(protocol, host, port);
    }

    /**
     *
     * Create new File
     *
     * @param {String} title name for new File
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    create(folderId: string, title: string, token: string): RequestPromise {

        return this.request("post", "api/file", { folderId, title }, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Update File
     *
     * @param {String} id ObjectId to retrieve and update this File
     * @param {JWT} token JWT with user information
     * @param {String} title new title to update
     * @param {String} content new content to update
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    update(id: string, token: string, title?: string, content?: string): RequestPromise {

        return this.request("put", `api/file/${id}`, { title, content }, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Retrieve File
     *
     * @param {String} id ObjectId to retrieve File
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    retrieve(id: string, token: string): RequestPromise {

        return this.request("get", `api/file/${id}`, undefined, { "Authorization": "bearer " + token });
    }

    /**
     *
     * Delete File
     *
     * @param {String} id ObjectId to delete File
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    remove(id: string, token: string): RequestPromise {

        return this.request("delete", `api/file/${id}`, undefined, { "Authorization": "bearer " + token });
    }
}