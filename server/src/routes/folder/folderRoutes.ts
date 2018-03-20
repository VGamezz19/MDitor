import { create, remove, update, retrieve, list } from "./handlers";

import { Router, Handler } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const folderRouter: Router = Router();

folderRouter.get("/folder", list);

folderRouter.get("/folder/:id", retrieve);

folderRouter.post("/folder", jsonBodyParser, create);

folderRouter.put("/folder/:id", jsonBodyParser, update);

folderRouter.delete("/folder/:id", jsonBodyParser, remove);

export { folderRouter };