import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function remove (req: Request, res: Response) {

    const { params: { id } } = req;

    logic.folder.delete(id)
        .then(() => {

            res.json(success());
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { remove };