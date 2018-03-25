/**
 * DataType MDitor, from mditor-types module (../mditor-types/ project)
 */
import File from 'mditor-types'

/**
 * Business FolderApi, from mditor-api module (../api/ project)
 */
import { FolderApi } from "mditor-api";

import { tokenUser } from "./user";

const folderApilogic = new FolderApi("http", "localhost", "5050");

/**
 * folder logic client side (bussines manager)
 *
 * Defined a logic to manager Folder data in client side.
 *
 * @version 1.0.0
 */
const folderLogic = {

    /**
     * 
     * Logic Folder function create
     *
     * function to send and create new Folder in Server side, and then,
     * when server has responsed with here ID, It will update folder array
     * from client side updated
     * 
     * @param {String} title title for new Folder
     * @param {Array<File>} folders array with all folders in Client side
     *
     * @returns {Promise<Array[File]>} will return a promise with array of Files
     *
     * @version 1.0.0
     */
    create: (title, folders) => {

        return folderApilogic.create(title, tokenUser)
            .then(res => [...folders, new File('folder', res.data.id, title)]);
    },

    /**
     * 
     * Logic Folder function retrieve
     *
     * function to retrieve some folder, in data client side
     * 
     * @param {String} id id to retrieve a folder
     * @param {Array<File>} folders array with all data folders client side
     *
     * @returns {File} Folder retrieved
     *
     * @version 1.0.0
     */
    retrieve: (id, folders) => {

        const folder = folders.find(folder => folder.id === id)

        return folder
    },

    /**
     * 
     * Logic Folder function update
     *
     * function to update content file. First It will send to Server side like
     * asynchronous promise and then, It will updated data client side like 
     * synchronous function. It will be productive for the User Experience
     * 
     * @param {String} id id to update a folder
     * @param {String} title title from updated Folder
     * @param {Array<File>} folders array with all folders in Client side
     *
     * @returns {Array<File>} array with all data folders client updated
     *
     * @version 1.0.0
     */
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

    /**
     * 
     * Logic Folder function remove
     *
     * function to update content file. First It will send to Server side like
     * asynchronous promise and then, It will updated data client side like 
     * synchronous function. It will be productive for the User Experience
     * 
     * @param {String} id id to remove a folder
     * @param {Array<File>} folders array with all folders in Client side
     *
     * @returns {Array<File>} array with all data folders client updated
     *
     * @version 1.0.0
     */
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