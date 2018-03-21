import { create, remove, update, retrieve, list } from "./handlers";

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const passport = require("passport");

const folderRouter: Router = Router();

folderRouter.use(passport.authenticate("jwt", { session: false }));

folderRouter.get("/folder", list);

folderRouter.get("/folder/:id", retrieve);

folderRouter.post("/folder", jsonBodyParser, create);

folderRouter.put("/folder/:id", jsonBodyParser, update);

folderRouter.delete("/folder/:id", jsonBodyParser, remove);

export { folderRouter };