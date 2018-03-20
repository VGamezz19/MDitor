import { create, remove, update, retrieve, list } from "./handlers";

import { Router, Handler } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const fileRouter: Router = Router();

fileRouter.get("/file", list);

fileRouter.get("/file/:id", retrieve);

fileRouter.post("/file", jsonBodyParser, create);

fileRouter.put("/file/:id", jsonBodyParser, update);

fileRouter.delete("/file/:id", jsonBodyParser, remove);

export { fileRouter };