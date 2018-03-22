interface ICallAPI {
    protocol: ("http" | "https");
    host: string;
    port?: string;
    baseurl: string;
    getBaseUrl(): string;
}

export { ICallAPI };