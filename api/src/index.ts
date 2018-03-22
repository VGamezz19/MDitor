// require("dotenv").config();

// const { API_PROTOCOL, API_HOST, API_PORT, JWT_SECRET: secret, JWT_EXP: expiration } = process.env;

// const rp = require("request-promise");

// const api = {
//     _baseUrl() {
//         while (this) {
//             return `${API_PROTOCOL}://${API_HOST}`;
//         };

//     },

//     _call(method: string, path: string, body?: object, headers?: string) {
//         return rp({
//             method,
//             uri: `${this._baseUrl()}/${path}`,
//             headers,
//             body,
//             json: true
//         });
//     },

//     // login(username, password) {
//     //     return this._call('post', 'login', { username, password })
//     // },

//     // list(token) {
//     //     return this._call('get', 'users', undefined, {'Authorization': 'Bearer '+token})
//     // },

//     create(name: string, surname: string, email: string, username: string, password: string) {
//         return this._call("post", "user", { name, surname, email, username, password });
//     },

//     // retrieve(id, token){
//     //     return this._call('get', `user/${id}`, undefined , {'Authorization': 'Bearer '+token})
//     // },

//     // update(id, name, surname, email, username, password, newUsername, newPassword, token) {
//     //     return this._call('put', `user/${id}`, { name, surname, email, username, password, newUsername, newPassword }, {'Authorization': 'Bearer '+token})
//     // },

//     // remove(id, username, password , token) {
//     //     return this._call('delete', `user/${id}`, {username, password}, {'Authorization': 'Bearer '+token})
//     // }
// };



// export  { api } ;

import { UserAPI } from "./user";

// const api = { user };

export { UserAPI };