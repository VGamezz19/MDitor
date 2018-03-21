import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function retrieve(req: Request, res: Response) {

    const { params: { id } } = req;

    logic.user.retrieve(id)
        .then(user => {

            res.json(success(user));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { retrieve };