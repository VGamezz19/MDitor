require("dotenv").config();

import { folderRouter, userRouter, fileRouter } from "./routes";

const express = require("express");

const bodyParser = require("body-parser");

const passport = require("passport");

require("./config/passportStrategy");

require("./db");

const jsonBodyParser = bodyParser.json();

const app = express();

app.use(passport.initialize());

app.use("/user", userRouter);

app.use("/api", folderRouter);

app.use("/api", fileRouter);

// ============= 🔥 =============


app.listen(process.env.PORT, () => console.log(`server listen in port ${process.env.PORT}`));

export { app };