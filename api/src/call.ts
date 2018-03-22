import rp, { OptionsWithUrl, RequestPromiseOptions } from "request-promise";

import { Headers, } from "request";

import { ICallAPI } from "./interfaces/";

class Call implements ICallAPI {
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

    _request(method: string, path: string, body?: object, headers?: Headers) {

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

export { Call };