const express = require("express");
const app = express();
const port = 1111;

app.get("/", (request, response) => {
  response.send("<h1 style='color:red; text-align: center;'>jay shree ram</h1>");
});

app.get("/nikhil", (request, response) => {
  response.send(
    "<h1 style='color:red; text-align: center;'>Ram ram nihkil ji kaise hai app <br/> main appka server bol rha hu.<h1/>"
  );
});

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}/`);
});
