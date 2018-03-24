import { UserApi } from "mditor-api";

const userApilogic = new UserApi("http", "localhost", "5050");

export let tokenUser;

const userLogic = {

    login: async (user, pass) => {

        tokenUser = await userApilogic.login(user, pass)
            .then(res => res.data.token);

        return tokenUser
    },

    retrieve: async (token) => {

        const userData = await userApilogic.retrieve(token)
            .then(res => res.data);;

        return userData
    }
}

export default userLogic 