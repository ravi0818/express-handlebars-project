const { default: axios } = require("axios");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  res.redirect("/1");
});

app.get("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await axios.get(
    "https://reqres.in/api/users?page=" + req.params.id
  );

  data = data.data;

  res.render("home", {
    data: data.data,
  });
});

app.listen(5000, () => {
  console.log("The web server has started on port 5000");
});
