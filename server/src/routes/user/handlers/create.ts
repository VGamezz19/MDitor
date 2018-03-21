import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

const jwt = require("jsonwebtoken");

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env;

const expiresIn = parseInt(expiration);

function create(req: Request, res: Response) {

    const { body: { name, surname, email, username, password } } = req;

    logic.user.register(name, surname, email, username, password)
        .then(id => {

            const token = jwt.sign({ id, username }, secret);

            res.json(success({ token }));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { create };