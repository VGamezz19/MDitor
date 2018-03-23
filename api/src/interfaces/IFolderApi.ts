import { RequestPromise } from "request-promise";

/**
 * FolderApi, interface (contract)
 *
 * Defines contrat to use FolderApi
 *
 * @version 1.0.0
 */
export interface IFolderApi {

    create(title: string, token: string): RequestPromise;

    update(id: string, title: string, token: string): RequestPromise;

    retrieve(id: string, token: string): RequestPromise;

    remove(id: string, token: string): RequestPromise;
}