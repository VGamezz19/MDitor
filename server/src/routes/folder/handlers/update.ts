import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function update (req: Request, res: Response) {

    const { body: { title } } = req;

    const { params: { id } } = req;

    logic.folder.update(id, title)
        .then(() => {

            res.json(success());
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { update };