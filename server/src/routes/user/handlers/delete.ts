// import { Response, Request } from "express";
// import { success, fail } from "../../../config";
// import { logic } from "../../../logic";

// function remove(req: Request, res: Response) {
//     const { body: { username, password } } = req;
//     const { params: { id } } = req;

//     logic.user.remove(id, username, password)
//         .then(() => {

//             res.json(success());
//         })
//         .catch(err => {

//             res.json(fail(err.message));
//         });
// }

// export { remove };