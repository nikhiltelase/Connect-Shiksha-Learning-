import express from "express";
import connectDb from "./config/db.js";

const app = express();
const port = 1111;
connectDb();

app.get("/", (req, res) => {
  res.send("jay shree ram");
});


app.listen(port, () => {
  console.log(`app start on port: http://localhost:${port}`);
});
