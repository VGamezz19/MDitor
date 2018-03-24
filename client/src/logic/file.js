import File from 'mditor-types'

import { FileApi } from "mditor-api";

import folderLogic from "./folder";

import { tokenUser } from "./user";

console.log(tokenUser)

const fileApilogic = new FileApi("http", "localhost", "5050");

const fileLogic = {

    create: (folderId, title, folders) => {

        return fileApilogic.create(folderId, title, tokenUser)
            .then(res => folders.map(folder => {

                if (folder.id === folderId) {

                    folder.add(new File('file', res.data.id, title))
                }
                return folder
            }))
    },

    retrieve: (folderId, id, folders) => {

        const folder = folderLogic.retrieve(folderId, folders)

        if (!folder) return false

        const file = folder.getFile(id)

        return file
    },

    remove: (folderId, id, folders) => {

        /**
         * Send to Server side
         */
        fileApilogic.remove(id, tokenUser);

        /**
         * Interactuation with user
         */
        return folders.filter(folder => {
            if (folder.id === folderId) {
                folder.remove(folder.getFile(id))
            }
            return folder
        })
    },

    write: (folderId, id, content, folders) => {

        /**
         * Send to Server side
         */
        fileApilogic.update(id, tokenUser, undefined, content)

        /**
         * Interactuation with user
         */
        return folders.map(folder => {

            if (folder.id === folderId) {

                folder.getFile(id).setContent(content)
            }
            return folder
        })

    }

}

export default fileLogic 