import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function create (req: Request, res: Response) {

    const { body: { title }, user: { _id } } = req;


    logic.folder.create(_id, title)
        .then(id => {

            res.json(success({ id }));
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { create };