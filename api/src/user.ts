import { Call } from "./call";

const call = new Call("https", "server-mditor.herokuapp.com");

const user = {

    create(name: string, surname: string, email: string, username: string, password: string) {

        return call._request("post", "user", { name, surname, email, username, password });
    }
};

export { user };