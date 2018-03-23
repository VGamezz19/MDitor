/**
 * ApiClient, interface (contract)
 *
 * Defines contrat to use ApiClient
 *
 * @version 1.0.0
 */
export interface IApiClient {
    protocol: ("http" | "https");
    host: string;
    port?: string;
    baseurl: string;

    getBaseUrl(): string;

    request(method: string, path: string, body?: object, headers?: object): any;
}