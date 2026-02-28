const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/smartbin", (req, res) => res.render("smartbin"));
app.get("/register", (req, res) => res.render("register"));
app.get("/verify-email", (req, res) => res.render("verify-email"));
app.get("/forgot-password", (req, res) => res.render("forgot-password"));
app.get("/reports", (req, res) => res.render("reports"));
app.get("/", (req, res) => res.redirect("/smartbin"));

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));