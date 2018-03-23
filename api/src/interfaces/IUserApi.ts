import { RequestPromise } from "request-promise";

/**
 * UserApi, interface (contract)
 *
 * Defines contrat to use UserApi
 *
 * @version 1.0.0
 */
export interface IUserApi {

    create(name: string, surname: string, email: string, username: string, password: string): RequestPromise;

    login(username: string, password: string, token: string): RequestPromise;

    retrieve(token: string): RequestPromise;
}