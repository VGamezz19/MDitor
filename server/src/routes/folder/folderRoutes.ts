import { create, remove, update, retrieve, list } from "./handlers";

const passport = require("passport");
const LocalStrategy = require("passport-local");
const jwt = require("jsonwebtoken");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

import { Router } from "express";

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();

// folderRouter.use(passport.authenticate("jwt", { session: false }));
const secret = process.env.JWT_SECRET;

import { User } from "../../models";

const folderRouter: Router = Router();


folderRouter.use(passport.authenticate("jwt", { session: false }));


folderRouter.get("/folder", list);

folderRouter.get("/folder/:id", retrieve);

folderRouter.post("/folder", jsonBodyParser, create);

folderRouter.put("/folder/:id", jsonBodyParser, update);

folderRouter.delete("/folder/:id", jsonBodyParser, remove);


export { folderRouter };