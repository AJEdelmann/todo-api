//EXTERNAL DEPENDENCIES
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

/** ROUTERS */
const indexRouter = require("./routes/index");
const tasksRouter = require("./routes/tasks");
// sudo lsof -i tcp:3000
// sudo killall -9 node
// DEBUG=[app.js]:* npm start

/** OUR MIDDLEWARE */
const { setCors } = require("./middleware/security");
const env = require("./config/config");

// INIT THE SERVER
const app = express();

// LOGS
app.use(logger("dev"));

// CONNECT TO MONGO
const dbUrl =
  //   'mongodb+srv://Wasabis:G5pTxd7B5dkQaq3Whvqe5ncch7XEj2@todo-api-oafod.mongodb.net/test?retryWrites=true&w=majority';
  "mongodb+srv://dogFather2:todo-api@todo-api-xgjuk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// mongoose.connect(env.db, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
  console.log("Database connection established...");
});

// REQUEST PARSERS
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(setCors);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/", indexRouter);
app.use("/tasks", tasksRouter);

// ERROR HANDLING
app.use(function(req, res, next) {
  const error = new Error("Something is wrong!");
  error.status = 400;
  next(error);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message
    }
  });
});

/** EXPORT PATH */
module.exports = app;
