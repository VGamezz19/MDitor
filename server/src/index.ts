import { Response, Request, NextFunction } from "express";

import dotenv from "dotenv";

dotenv.config();

const express = require("express");

const app = express();

const bodyParsers = require("body-parser");

const formBodyParser = bodyParsers.urlencoded({ extended: false });

// app.use(bodyParsers)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

// ============= 🔥 =============

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app };