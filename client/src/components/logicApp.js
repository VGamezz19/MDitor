import File from 'mditor-types'

let appId = 123

const logicApp = {
        createFolder: (title, folders) => ([...folders, new File('folder', appId ++, title)]),

        retrieveFolder: (id, folders) => {
            const folder = folders.find(folder => folder.id === id)
            return folder
        },

        updateFolder: (id, title, folders) => folders.map(folder => {
            if (folder.id === id) folder.setTitle(title)
            return folder
        }),

        removeFolder: (id, folders) => folders.filter(folder => folder.id !== id)
        ,
    File: {
        create: (folderId, title, folders) => folders.map(folder => {
            if (folder.id === folderId) {
                folder.files = [...folder.files, { title, content: '', id: appId++ }]
            }
            return folder
        }),

        retrieve: (folderId, id, folders) => {
            
            const folder = logicApp.retrieveFolder(folderId, folders)

            if (!folder) return false

            const file = folder.files.find(file => file.id === id)

            return file
        },

        remove: (folderId, id, folders) => folders.filter(folder => {
            if (folder.id === folderId) {
                folder.files = folder.files.filter(file => file.id !== id)
            }
            return folder
        }),

        write: (folderId, id, content, folders) => folders.map(folder => {
            if (folder.id === folderId) {
                folder.files = folder.files.map(file => {
                    if (file.id === id) {

                        file.content = content
                    }
                    return file
                })
            }
            return folder
        })
    }
}

export default  logicApp 