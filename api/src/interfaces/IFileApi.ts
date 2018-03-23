import { RequestPromise } from "request-promise";

/**
 * FileApi, interface (contract)
 *
 * Defines contrat to use FileApi
 *
 * @version 1.0.0
 */
export interface IFileApi {

    create(folderId: string, title: string, token: string): RequestPromise;

    update(id: string, token: string, title?: string, content?: string): RequestPromise;

    retrieve(id: string, token: string): RequestPromise;

    remove(id: string, token: string): RequestPromise;
}