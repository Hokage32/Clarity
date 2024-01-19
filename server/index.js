const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors())

require("dotenv").config();
const { advice } = require("../server/controllers/Post");
const PORT = 3001;

app.post("/completions", advice);

app.listen(PORT, () => console.log(`Running on ${PORT}`));

