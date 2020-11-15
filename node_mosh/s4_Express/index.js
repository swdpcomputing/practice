const express = require("express");
const morgan = require("morgan");
const config = require("config");
const courses = require("./routes/courses");
const home = require("./routes/home");
const authenticator = require("./middleware/authenticator");
const logger = require("./middleware/logger");

const startupDebug = require("debug")("debug:startup");
const debug = require("debug")("debug:main");

const app = express();
app.use("/api/courses", courses);
app.use("/", home);

app.use(express.json()); // populates req.body
app.use(express.urlencoded({ extended: true })); // See urlencoded in Postman key=value&key=value
app.use(express.static("public")); // static file test

// Pug
app.set("view engine", "pug"); // require not required for pug
app.set("views", "./views"); // default

// Environment & Config
startupDebug(`NODE_ENV: ${process.env.NODE_ENV}`);
startupDebug(`app: ${app.get("env")}`);
startupDebug("Application Name: " + config.get("name"));
startupDebug("Mail Server: " + config.get("mail.host"));
// console.log('Mail Password: ' + config.get('mail.password'));

// Only works in bash: NODE_ENV=production nodemon app.js
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    startupDebug("Morgan enabled...");
}

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
    console.log(`Listening on port ${port}...`);
});
