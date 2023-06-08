//  import express from "express";
//  const port = 4000;

//  const app = express();

//  app.get('/', (req, res) => res.send('Server is ready'))

//  app.listen(port, ( => console.log(`listening on ${port}`)));

require("dotenv").config();
const express = require("express");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const axios = require("axios");
const cors = require("cors");
// const { logger } = require("./middleware");

const app = express();
const port = process.env.PORT || 4000;

const KEY = "MieGBYUBZfycgTModAOD";
const SECRET = "BEHTbOwaacKGgntUjvCUBLVwZdkbfkmX";

app.use(cors());

app.get("/search", async (req, res) => {
  const { title, release_title, artist} = req.query;

  const resp = await axios.get(
    `https://api.discogs.com/database/search?q=${title, release_title, artist}&{?title, release_title, artist}&key=${KEY}&secret=${SECRET}`
  );

  console.log(resp);

  res.json({ resp: resp.data });
});

app.use(express.json());
// app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
