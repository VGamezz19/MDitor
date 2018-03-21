import { Response, Request } from "express";
import { success, fail } from "../../../config";
import { logic } from "../../../logic";

function list (req: Request, res: Response) {

    logic.file.list()
        .then(folders => res.json(success(folders)))
        .catch(err => res.json(fail(err.message)));
}

export { list };