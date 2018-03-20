const { success, fail } = require('./api-utils')
const logic = require('../../logic')
const jwt = require('jsonwebtoken')

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env

const expiresIn = parseInt(expiration)

module.exports = (req, res) => {
    const { body: { username, password } } = req

    logic.verify(username, password)
        .then(() => {
            const token = jwt.sign({ username }, secret, { expiresIn })

            res.json(success({ token }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}