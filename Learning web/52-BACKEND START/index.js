import express from "express"
import connectDb from "./config/database.js";
import routes from "./routes/userRoutes.js";

const app = express();
const port = 1111;

connectDb();

//for parsing application/json
app.use(express.json())

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get("/", (request, response) => {
  response.send('jay shree ram')
});

app.use("/user", routes)

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}/`);
});
