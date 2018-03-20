const { Router } = require('express')
const bodyParser = require('body-parser')
const { login, list, create, update, delete: _delete, retrieve } = require('./handlers')
const { success, fail } = require('./handlers/api-utils')

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET 

function jwtValidate(req, res, next) {
    const auth = req.get('authorization')

    try {
        const token = auth.split(' ')[1]

        jwt.verify(token, secret)

        next()
    } catch(err) {
        res.json(fail('invalid token'))
    }
}

const router = Router()

router.get('/users', jwtValidate, list)

const jsonBodyParser = bodyParser.json()

router.post('/login', jsonBodyParser, login)

router.post('/user', [jwtValidate, jsonBodyParser], create)

router.put('/user/:id', [jwtValidate, jsonBodyParser], update)

router.delete('/user/:id', [jwtValidate, jsonBodyParser], _delete)

router.get('/user/:id', jwtValidate, retrieve)

module.exports = router