import { Response, Request } from "express";

import { success, fail } from "../../../config";

const jwt = require("jsonwebtoken");

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env;

// const expiresIn = parseInt(expiration);

function login(req: Request, res: Response) {

    const { user: { _id, username } } = req;

    jwt.sign({ _id, username }, secret, (err: Error, token: Object) => {

        if (err) return res.json(fail(err));

        res.json(success({ token }));
    });
}

export { login };