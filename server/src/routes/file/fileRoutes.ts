import { create, remove, update, retrieve, list } from "./handlers";

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const passport = require("passport");

const fileRouter: Router = Router();

fileRouter.use(passport.authenticate("jwt", { session: false }));

fileRouter.get("/file", list);

fileRouter.get("/file/:id", retrieve);

fileRouter.post("/file", jsonBodyParser, create);

fileRouter.put("/file/:id", jsonBodyParser, update);

fileRouter.delete("/file/:id", jsonBodyParser, remove);

export { fileRouter };