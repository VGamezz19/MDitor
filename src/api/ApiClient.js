const API = {
    getFolders() {
        return [
            {
                id: 0,
                title: 'new Folder1',
                files: [{
                    id: 2, title: 'terst file1', content: ''
                }, { id: 3, title: 'terst file2', content: '' }]
            }, {
                id: 1,
                title: 'new Folder2',
                files: [{ id: 4, title: 'terst file1', content: '' }, { id: 5, title: 'terst file2', content: '' }]
            }]
    },

    getUser() {
        return {
            name: 'Victor',
            surname: 'Gamez'
          }
    }
}

export default API