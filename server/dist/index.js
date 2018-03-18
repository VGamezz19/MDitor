"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express = require("express");
const app = express();
const bodyParsers = require("body-parser");
const formBodyParser = bodyParsers.urlencoded({ extended: false });
// app.use(bodyParsers)
app.get("/", (req, res) => {
    res.send("Hello World");
});
// ============= 🔥 =============
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server listen in port ${PORT}`));
//# sourceMappingURL=index.js.map