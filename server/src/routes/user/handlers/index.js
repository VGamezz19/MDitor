const login = require('./login')
const list = require('./list')
const create = require('./create')
const update = require('./update')
const _delete = require('./delete')
const retrieve = require('./retrieve')

module.exports = {
    login,
    list,
    create,
    update,
    delete: _delete,
    retrieve
}