import File from 'mditor-types'

let appId = 123

const logicApp = {

    createFolder: (title, folders) => ([...folders, new File('folder', appId++, title)]),

    retrieveFolder: (id, folders) => {
        const folder = folders.find(folder => folder.id === id)
        return folder
    },

    updateFolder: (id, title, folders) => folders.map(folder => {
        if (folder.id === id) folder.setTitle(title)
        return folder
    }),

    removeFolder: (id, folders) => folders.filter(folder => folder.id !== id),

    createFile: (folderId, title, folders) => folders.map(folder => {
        if (folder.id === folderId) {
            folder.add(new File('file', appId++, title))
        }
        return folder
    }),

    retrieveFile: (folderId, id, folders) => {

        const folder = logicApp.retrieveFolder(folderId, folders)

        if (!folder) return false

        const file = folder.getFile(id)

        return file
    },

    removeFile: (folderId, id, folders) => folders.filter(folder => {
        if (folder.id === folderId) {
            folder.remove(folder.getFile(id))
        }
        return folder
    }),

    writeFile: (folderId, id, content, folders) => folders.map(folder => {
        if (folder.id === folderId) {
            folder.getFile(id).setContent(content)
        }
        return folder
    }),

    refactorDataToFileType: (dataFolder) => {
        let folders = []

        for (let i = 0; i < dataFolder.length; i++) {

            let filesToFolder = []
            const { id, title, files: folderFiles } = dataFolder[i];

            if (folderFiles) {

                let fileLength = folderFiles.length

                for (let i = 0; i < fileLength; i++) {

                    const { id, title, content } = folderFiles[i];

                    filesToFolder.push(new File('file', id, title, content))
                }
            }

            folders.push(new File("folder", id, title, undefined, filesToFolder))
        }
        return folders
    },

}

export default logicApp 