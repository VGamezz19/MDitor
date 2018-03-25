/**
 * Business UserApi, from mditor-api module (../api/ project)
 */
import { UserApi } from "mditor-api";

const userApilogic = new UserApi("http", "localhost", "5050");

export let tokenUser;

/**
 * user logic client side (bussines manager)
 *
 * Defined a logic to manager User session in client side.
 *
 * @version 1.0.0
 */
const userLogic = {

    /**
     * 
     * Logic User function login
     *
     * function to verify user credentials
     * 
     * @param {String} user user name
     * @param {String} pass password user
     *
     * @returns {Promise<JWT>} JWT with user information (_id)
     *
     * @version 1.0.0
     */
    login: (user, pass) => {

        return userApilogic.login(user,pass)
            .then(res => {
                return tokenUser = res.data.token
            })
    },

    /**
     * 
     * Logic User function retrieve
     *
     * function to retrieve all information about this user
     * 
     * @param {JWT} token mandatory JWT from this user
     *
     * @returns {Promise<Object>} Object with User information, folders and files
     *
     * @version 1.0.0
     */
    retrieve: (token) => { 

        return userApilogic.retrieve(token)
            .then(res => res.data);
    }
}

export default userLogic 