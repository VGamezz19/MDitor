const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password, newUsername, newPassword } } = req
    const { params: { id } } = req

    logic.update(id, name, surname, email, username, password, newUsername, newPassword)
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}