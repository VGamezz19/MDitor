import { User, Folder, IUserModel } from "../models";
import { validate } from "./validate";
import mongoose = require("mongoose");

/**
 * user logic (bussines manager) Object (logic)
 *
 * Defined a logic to manager User Data.
 *
 * @version 1.0.0
 */
const user = {

    verift: function verify(username: string, password: string) {
        return Promise.resolve()
            .then(() => {

                validate({ username, password });

                return User.findOne({ username, password });
            })
            .then(user => {

                if (!user) throw Error("username and/or password wrong");

                return true;
            });
    },

    register: function register(name: string, surname: string, email: string, username: string, password: string) {
        return Promise.resolve()
            .then(() => {

                validate({ name, surname, email, username, password });

                return User.findOne({ username });
            })
            .then(user => {

                if (user) throw Error("username already exists");

                return User.create({ name, surname, email, username, password })
                    .then((user) => user._id);
            });
    },

    list: function list() {

        return User.find({}, { _id: 1, name: 1, surname: 1, email: 1, username: 1 });
    },

    update: function update(_id: string, name: string, surname: string, email: string, username: string, password: string, newUsername: string, newPassword: string) {
        return Promise.resolve()
            .then(() => {

                validate({ _id, name, surname, email, username, password, newUsername, newPassword });

                return User.findOne({ username: newUsername });
            })
            .then(user => {

                if (user) throw Error("username already exists");

                return User.findOne({ _id });
            })
            .then(user => {

                if (!user) throw Error("user does not exists");

                if (user.username !== username || user.password !== password) throw Error("username and/or password wrong");

                return User.updateOne({ _id }, { name, surname, email, username: newUsername, password: newPassword });
            });
    },

    retrieve: function retrieve(_id: string) {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return User.findOne({ _id }, { password: 0 });
            })
            .then(user => {
                if (!user) throw Error("user does not exist");

                return user;
            });
    },

    remove: function remove(_id: string, username: string, password: string) {
        return Promise.resolve()
            .then(() => {

                validate({ _id, username, password });

                return User.findOne({ _id });
            })
            .then(user => {

                if (!user) throw Error("user does not exist");

                if (user.username !== username || user.password !== password) throw Error("username and/or password wrong");

                return User.deleteOne({ _id });
            });
    }
};

export { user, validate };