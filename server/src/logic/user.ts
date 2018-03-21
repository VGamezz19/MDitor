import { User, IUserModel, Folder } from "../models";
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

    /**
     * Verify/Login a User
     *
     * @param {String} username - The username to verify User
     *
     * @param {String} password - The password to verify User
     *
     * @returns {Promise<IUserModel>} file._id - The id from new File
     *
     * @throws {Error} - If not valid username or password not found
     */
    verify: function verify(username: string, password: string): any {
        return Promise.resolve()
            .then(() => {

                validate({ username, password });

                return User.findOne({ username });
            })
            .then((user: any) => {

                if (!user) throw Error("username and/or password wrong");

                return new Promise((resolve, reject) => {
                    user.comparePassword(password, (err: Error, isMatch: boolean) => {

                        if (err) { return reject(err); }

                        if (isMatch) {

                            return resolve(user);
                        }

                        reject(Error("username and/or password wrong"));
                    });
                });
            })
            .then((user: any) => {
                user.password = undefined;

                return user;
            });
    },

    /**
     * Register/Create a User
     *
     * @param {String} name - The name for new User
     *
     * @param {String} surname - The surname for new User
     *
     * @param {String} email - The email for new User
     *
     * @param {String} username - The username for new User
     *
     * @param {String} password - The password for new User
     *
     * @returns {Promise<mongoose.Types.ObjectId>| never} file._id - The id from new File
     *
     * @throws {Error} - If not valid name, surname, email, username, password not found
     */
    register: function register(name: string, surname: string, email: string, username: string, password: string): Promise<mongoose.Types.ObjectId> | never {
        return Promise.resolve()
            .then(() => {

                validate({ name, surname, email, username, password });

                return User.findOne({ username });
            })
            .then((user: IUserModel) => {

                if (user) throw Error("username already exists");

                return User.create({ name, surname, email, username, password })
                    .then((user: IUserModel) => user._id);
            });
    },

    /**
     * Retrieve a User
     *
     * @param {mongoose.Types.ObjectId} _id - User Id
     *
     * @returns {Promise<IUserModel>} file._id - The id from new File
     *
     * @throws {Error} - If not valid id not found
     */
    retrieve: function retrieve(_id: mongoose.Types.ObjectId): Promise<{}> | never {
        return Promise.resolve()
            .then(() => {

                validate({ _id });

                return User.findOne({ _id }, { password: 0 });
            })
            .then((user: IUserModel) => {

                if (!user) throw Error("user does not exist");
                // File.populate(folder, { path: "files", select: "title" })
                return Folder
                    .populate(user, {
                        path: "folders",
                        // Get friends of friends - populate the "friends" array for every friend
                        populate: { path: "files" }
                    });

            });
    }

    /**
     * No implemented
     *
     */
    // list: function list() {

    //     return User.find({}, { _id: 1, name: 1, surname: 1, email: 1, username: 1 });
    // },

    // update: function update(_id: string, name: string, surname: string, email: string, username: string, password: string, newUsername: string, newPassword: string) {
    //     return Promise.resolve()
    //         .then(() => {

    //             validate({ _id, name, surname, email, username, password, newUsername, newPassword });

    //             return User.findOne({ username: newUsername });
    //         })
    //         .then(user => {

    //             if (user) throw Error("username already exists");

    //             return User.findOne({ _id });
    //         })
    //         .then(user => {

    //             if (!user) throw Error("user does not exists");

    //             if (user.username !== username || user.password !== password) throw Error("username and/or password wrong");

    //             return User.updateOne({ _id }, { name, surname, email, username: newUsername, password: newPassword });
    //         });
    // },

    // remove: function remove(_id: string, username: string, password: string) {
    //     return Promise.resolve()
    //         .then(() => {

    //             validate({ _id, username, password });

    //             return User.findOne({ _id });
    //         })
    //         .then(user => {

    //             if (!user) throw Error("user does not exist");

    //             if (user.username !== username || user.password !== password) throw Error("username and/or password wrong");

    //             return User.deleteOne({ _id });
    //         });
    // }
};

export { user, validate };