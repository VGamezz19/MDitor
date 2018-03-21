import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function retrieve(req: Request, res: Response) {

    const { user: { _id } } = req;

    logic.user.retrieve(_id)
        .then(user => {

            res.json(success(user));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { retrieve };