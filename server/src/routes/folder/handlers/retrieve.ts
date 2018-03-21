import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function retrieve (req: Request, res: Response) {

    const { params: { id } } = req;

    logic.folder.retrieve(id)
        .then(folder => {

            res.json(success(folder));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { retrieve };