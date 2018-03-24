import userLogic from "./user";

import folderLogic from "./folder";

import fileLogic from "./file";

import File from 'mditor-types'

const logic = {
    user: userLogic,
    folder: folderLogic,
    file: fileLogic,
    refactorDataToFileType
}

export default logic

function refactorDataToFileType(dataFolder) {
    let folders = []

    for (let i = 0; i < dataFolder.length; i++) {

        let filesToFolder = []
        const { _id: id, title, files: folderFiles } = dataFolder[i];

        if (folderFiles) {

            let fileLength = folderFiles.length

            for (let i = 0; i < fileLength; i++) {

                const { _id: id, title, content } = folderFiles[i];

                filesToFolder.push(new File('file', id, title, content))
            }
        }

        folders.push(new File("folder", id, title, undefined, filesToFolder))
    }
    return folders
}

