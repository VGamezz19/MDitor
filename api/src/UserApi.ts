import { RequestPromiseApi } from "./RequestPromiseApi";

import { RequestPromise } from "request-promise";

import { IUserApi } from "./interfaces";

/**
 * UserApi, class (logic)
 *
 * Logic User API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicUser just like this:
 *
 * const logicUser = new UserAPI("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class UserApi extends RequestPromiseApi implements IUserApi {

    constructor(protocol: ("http" | "https"), host: string, port?: string) {

        super(protocol, host, port);
    }

    /**
     *
     * Create new User
     *
     * @param {String} name name for new user
     * @param {String} surname suername for new user
     * @param {String} email email for new user
     * @param {String} username username for new user
     * @param {String} password passwaord for new user
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or user already exist
     */
    create(name: string, surname: string, email: string, username: string, password: string): RequestPromise {

        return this.request("post", "user/register", { name, surname, email, username, password });
    }

    /**
     *
     * login User
     *
     * @param {String} username username for login user
     * @param {String} password passwaord for login user
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or user or/and password wrong
     */
    login(username: string, password: string) {
        return this.request("post", "user/login", { username, password });
    }

    /**
     *
     * retrieve User
     *
     * @param {JWT} token JWT encrypted with _id of user
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Unauthorise or invalid token
     */
    retrieve(token: string) {

        return this.request("get", "user/retrieve", undefined, { "Authorization": "bearer " + token });
    }
}