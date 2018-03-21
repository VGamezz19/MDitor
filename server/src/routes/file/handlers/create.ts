import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function create (req: Request, res: Response) {

    const { body: { folderId, title } } = req;

    logic.file.create(folderId, title)
        .then(id => {

            res.json(success({ id }));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { create };