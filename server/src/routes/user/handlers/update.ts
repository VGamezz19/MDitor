// import { Response, Request } from "express";
// import { success, fail } from "../../../config";
// import { logic } from "../../../logic";


// function update(req: Request, res: Response) {

//     const { body: { name, surname, email, username, password, newUsername, newPassword } } = req;

//     const { params: { id } } = req;

//     logic.user.update(id, name, surname, email, username, password, newUsername, newPassword)
//         .then(() => {

//             res.json(success());
//         })
//         .catch(err => {

//             res.json(fail(err.message));
//         });
// }

// export { update };