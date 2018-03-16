const API = {
    getFolders() {
        return [
            {
                id: 0,
                title: 'new Folder (1)',
                files: [{
                    id: 2, title: 'new file (1)', content: ''
                }, { id: 3, title: 'new file (2)', content: '' }]
            }, {
                id: 1,
                title: 'new Folder (2)',
                files: [{ id: 4, title: 'new file (3)', content: '' }, { id: 5, title: 'new file (4)', content: '' }]
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