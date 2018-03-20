const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { username, password } } = req
    const { params: { id } } = req

    logic.remove(id, username, password)
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}