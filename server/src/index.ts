import { Response, Request, NextFunction } from "express";

import { logic } from "./logic";

import { Folder } from "./Models";

import mongoose from "mongoose";

require("dotenv").config();

const express = require("express");

const app = express();

const bodyParsers = require("body-parser");

const formBodyParser = bodyParsers.urlencoded({ extended: false });

require("./db");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

// ============= 🔥 =============

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app, PORT };