import { Response, Request } from "express";

import { success, fail } from "../../../config";

// import { logic } from "../../../logic";

const jwt = require("jsonwebtoken");

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env;

const expiresIn = parseInt(expiration);

function login(req: Request, res: Response) {

    try {

        const { user: { _id, username } } = req;

        const token = jwt.sign({ _id, username }, secret);

        res.json(success({ token }));

    } catch (err) {

        res.json(fail(err));
    }
}

export { login };