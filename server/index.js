const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getStuff } = require("./controller.js");

app.get("/stuff", getStuff);

app.listen(3003, () => console.log("Listening on port 3003"));
