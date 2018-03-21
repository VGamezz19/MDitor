import { create, login, retrieve } from "./handlers";

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const passport = require("passport");

const userRouter: Router = Router();

userRouter.post("/login", [jsonBodyParser, passport.authenticate("local", { session: false })], login);

userRouter.post("/register", jsonBodyParser, create);

userRouter.get("/retrieve/", passport.authenticate("jwt", { session: false }), retrieve);

// userRouter.put("/user/:id",  jsonBodyParser, update);

// userRouter.delete("/user/:id",  jsonBodyParser, remove);

// userRouter.get("/user/:id", retrieve);

export { userRouter };