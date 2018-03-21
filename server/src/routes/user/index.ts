import { create, update, retrieve, list, login, remove } from "./handlers";

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

const LocalStrategy = require("passport-local");

import { User } from "../../models";

const passport = require("passport");

const jwt = require("jsonwebtoken");

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env;

const userRouter: Router = Router();

userRouter.post("/login", [jsonBodyParser, passport.authenticate("local", { session: false })], login);

userRouter.post("/register", jsonBodyParser, create);

// userRouter.put("/user/:id",  jsonBodyParser, update);

// userRouter.delete("/user/:id",  jsonBodyParser, remove);

// userRouter.get("/user/:id", retrieve);

export { userRouter };