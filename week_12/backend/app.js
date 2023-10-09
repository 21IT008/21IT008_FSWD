const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // your React app's address
    credentials: true,
  })
);

app.use(session({ secret: "keyboard cat", cookie: { maxAge: 600000 } }));
app.listen(8000, () => console.log("connected to port 8000"));
const [Name, Password] = ["om", "mypassword"];
app.post("/login", (req, res) => {
  const { name, password } = req.body;

  console.log(name, password);
  if (name == Name && password == Password) {
    req.session.name = name;
    res.json("success");
    console.log(req.session.name + "done");
    console.log(req.headers.cookie + "cookie");
    console.log(req.session.id);
  } else {
    res.json("please enter correct name and password");
  }
});

app.get("/dashboard", (req, res) => {
  console.log(req.headers.cookie);
  console.log(req.session.id);
  console.log(req.session.name + "dashboard");
  if (req.session.name) {
    res.json("welcome to dashboard");
  } else {
    res.json("please login first and try again");
  }
});
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.json("deleted");
});
