import { Call } from "./call";

// const call = new Call("https", "server-mditor.herokuapp.com");

class UserAPI {

    protocol: ("http" | "https");
    host: string;
    port?: string;
    call: Call;

    constructor(_protocol: ("http" | "https"), _host: string, _port?: string) {
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;

        if (this.port) {

            this.call = new Call(this.protocol, this.host, this.port);
        } else {

            this.call = new Call(this.protocol, this.host);
        }
    }

    create(name: string, surname: string, email: string, username: string, password: string) {

        return this.call._request("post", "user", "register", { name, surname, email, username, password });
    }
}

export { UserAPI };