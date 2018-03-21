require("dotenv").config();

import { folderRouter, userRouter, fileRouter } from "./routes";

const express = require("express");

const bodyParser = require("body-parser");

const passport = require("passport");

require("./routes/config/passportStrategy");

require("./db");

const jsonBodyParser = bodyParser.json();

const app = express();

app.use(passport.initialize());

app.use("/user", userRouter);

app.use("/api", folderRouter);

app.use("/api", fileRouter);

// ============= 🔥 =============

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app, PORT };