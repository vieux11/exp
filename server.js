const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/user");
const connection = require("./config/db");
const server = express();
const port = process.env.PORT;
connection();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", async function (req, res, next) {
  try {
    return res.status(200).send("Bienvenu sur pathyApi");
  } catch (error) {
    console.log(error);
  }
});
server.use("/api", userRouter);

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
