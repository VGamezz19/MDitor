import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function update(req: Request, res: Response) {

    const { body: { title, content } } = req;

    const { params: { id } } = req;

    logic.file.update(id, title, content)
        .then(() => {

            res.json(success());
        })
        .catch(err => {

            res.json(fail(err.message));
        });
}

export { update };