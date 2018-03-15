let appId = 123

const logicApp = {
    Folder: {
        create: (title, folders) => ([...folders, { title, id: appId++, files: [] }]),

        retrieve: (id, folders) => {
            const folder = folders.find(folder => folder.id === id)
            return folder
        },
        update: (id, title, folders) => folders.map(folder => {
            if (folder.id === id) folder.title = title
            return folder
        }),

        remove: (id, folders) => folders.filter(folder => folder.id !== id)
    },
    File: {
        create: (folderId, title, folders) => folders.map(folder => {
            if (folder.id === folderId) {
                folder.files = [...folder.files, { title, content: '', id: appId++ }]
            }
            return folder
        }),

        retrieve: (folderId, id, folders) => {
            
            const folder = logicApp.Folder.retrieve(folderId, folders)

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