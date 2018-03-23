import { Response, Request, NextFunction } from "express";

import { success, fail } from "./response";

/**
 *
 * HandlerError to controll error passport auth.
 *
 * Passport insert in req.user <-- an Error or User
 *
 * This hanlder is used in ./routes/**\/**Routes.ts as a middleware
 */
function handlerError(req: Request, res: Response, next: NextFunction) {

    const { user } = req;

    if (user instanceof Error) {

        const err = user.toString();

        return res.json(fail(err));
    }

    next();
}

export { handlerError };