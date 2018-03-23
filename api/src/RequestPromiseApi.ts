import rp, { OptionsWithUrl, RequestPromiseOptions, RequestPromise } from "request-promise";

import { Headers, } from "request";

import { IApiClient } from "./interfaces";

/**
 * RequestPromiseApi class. (logic)
 *
 * Define the standar properties and methods for User/File/Folder API
 *
 * @version 1.0.0
 */
export class RequestPromiseApi implements IApiClient {
    protocol: ("http" | "https");
    host: string;
    port?: string;
    baseurl: string;

    constructor(_protocol: ("http" | "https"), _host: string, _port?: string) {
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;

        if (this.port) {

            this.baseurl = `${this.protocol}://${this.host}:${this.port}`;
        } else {

            this.baseurl = `${this.protocol}://${this.host}`;
        }
    }

    getBaseUrl() {

        return this.baseurl;
    }

    request(method: string, path: string, body?: object, headers?: object): RequestPromise {

        const opts: OptionsWithUrl = {
            method,
            url: `${this.getBaseUrl()}/${path}`,
            headers,
            body,
            json: true
        };

        return rp(opts);
    }
}