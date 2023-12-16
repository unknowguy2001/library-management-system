const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;
const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE;

app.listen(port, () => {
  console.log(`Server run at port: ${port}`);
});
