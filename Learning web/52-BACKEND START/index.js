import express from "express"
import connectDb from "./config/database.js";
import routes from "./routes/userRoutes.js";

const app = express();
const port = 1111;

connectDb();

app.get("/", (request, response) => {
  response.send('jay shree ram')
});

app.use("/user", routes)

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}/`);
});
