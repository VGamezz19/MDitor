/**
 * DataType MDitor, from mditor-types module (../mditor-types/ project)
 */
import File from 'mditor-types'

/**
 * Business FileApi, from mditor-api module (../api/ project)
 */
import { FileApi } from "mditor-api";

import folderLogic from "./folder";

import { tokenUser } from "./user";

const fileApilogic = new FileApi("http", "localhost", "5050");

/**
 * file logic client side (bussines manager)
 *
 * Defined a logic to manager File data in client side.
 *
 * @version 1.0.0
 */
const fileLogic = {

    /**
     * 
     * Logic File function create
     *
     * function to send and create new File in Server side, and then,
     * when server has responsed with here ID, It will return all 
     * folders with the last folder update with new File
     * 
     * @param {String} folderId id of the Folder which contain the file
     * @param {String} title title for new File
     * @param {Array<File>} folders array with all folders in client side
     *
     * @returns {Promise<Array[File]>} will return a promise with array of Files
     *
     * @version 1.0.0
     */
    create: (folderId, title, folders) => {

        return fileApilogic.create(folderId, title, tokenUser)
            .then(res => folders.map(folder => {

                if (folder.id === folderId) {

                    folder.add(new File('file', res.data.id, title))
                }
                return folder
            }))
    },

    /**
     * 
     * Logic File function retrieve
     *
     * function to retrieve some file, in data client side
     * 
     * @param {String} folderId id of the Folder which contain the file
     * @param {String} id id to retrieve a file
     * @param {Array<File>} folders array with all data folders client side
     *
     * @returns {File} retrieved File
     *
     * @version 1.0.0
     */
    retrieve: (folderId, id, folders) => {

        const folder = folderLogic.retrieve(folderId, folders)

        if (!folder) return false

        const file = folder.getFile(id)

        return file
    },

    /**
     * 
     * Logic File function remove
     *
     * function to remove file. First It will send to Server side like asyn promise
     * and then, It will updated data client side like sincronouse function.
     * It will be productive for the User Experience
     * 
     * @param {String} folderId id of the Folder which contain the file
     * @param {String} id id to remove a file
     * @param {Array<File>} folders array with all folders in Client side
     *
     * @returns {Array<File>} array with all data folders client updated
     *
     * @version 1.0.0
     */
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

    /**
     * 
     * Logic File function write
     *
     * function to update content file. First It will send to Server side like
     * asynchronous promise and then, It will updated data client side like 
     * synchronous function. It will be productive for the User Experience
     * 
     * @param {String} folderId id of the Folder which contain the file
     * @param {String} id id to update a file
     * @param {String} content content from updated File
     * @param {Array<File>} folders array with all folders in Client side
     *
     * @returns {Array<File>} array with all data folders client updated
     *
     * @version 1.0.0
     */
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