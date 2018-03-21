import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function retrieve (req: Request, res: Response) {

    const { params: { id } } = req;

    logic.file.retrieve(id)
        .then(file => {

            res.json(success(file));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { retrieve };