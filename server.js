import path from "path";
import express from "express";
import nodemailer from "nodemailer";
import Axios from "axios";

const compression = require("compression");
const PORT = process.env.HTTP_PORT || 8080;
const app = express();
app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.send("this is the main route");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
