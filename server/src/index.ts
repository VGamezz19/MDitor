import { folderRouter } from "./routes";

require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

app.use("/api", folderRouter);

// ============= 🔥 =============

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app, PORT };