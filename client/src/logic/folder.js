import File from 'mditor-types';

import { FolderApi } from "mditor-api";

import { tokenUser } from "./user";

const folderApilogic = new FolderApi("http", "localhost", "5050");

const folderLogic = {

    create: (title, folders) => {
        console.log(tokenUser)
        return folderApilogic.create(title, tokenUser)
            .then(res => [...folders, new File('folder', res.data.id, title)]);
    },

    retrieve: (id, folders) => {
        const folder = folders.find(folder => folder.id === id)
        return folder
    },

    update: (id, title, folders) => {

        /**
         * Send to Server side
         */
        folderApilogic.update(id, title, tokenUser);

        /**
         * Interactuation with user
         */
        return folders.map(folder => {
            if (folder.id === id) folder.setTitle(title)
            return folder
        })
    },

    remove: (id, folders) => {

        /**
         * Send to Server side
         */
        folderApilogic.remove(id, tokenUser);

        /**
         * Interactuation with user
         */
        return folders.filter(folder => folder.id !== id)
    }
}

export default folderLogic 