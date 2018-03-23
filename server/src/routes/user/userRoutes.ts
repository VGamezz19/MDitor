import { create, login, retrieve } from "./handlers";

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const passport = require("passport");

const userRouter: Router = Router();

import { handlerError } from "../../config";

userRouter.post("/login", [jsonBodyParser, passport.authenticate("local", { session: false }), handlerError], login);

userRouter.post("/register", jsonBodyParser, create);

userRouter.get("/retrieve/", [passport.authenticate("jwt", { session: false }), handlerError], retrieve);

// userRouter.put("/user/:id",  jsonBodyParser, update);

// userRouter.delete("/user/:id",  jsonBodyParser, remove);

// userRouter.get("/user/:id", retrieve);

export { userRouter };