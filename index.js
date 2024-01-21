import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// const mongoose = require('mongoose');
// const flash = require('connect-flash');
// const session = require('cookie-session');
// const passport = require('passport');
// const sess = require('./config/session');



// require('./config/passport');
// require('now-env');

import appRoutes from "./routes/index.js";
import practiceRoutes from "./routes/practice.js";
import accountRoutes from "./routes/account.js";
// import trackRoutes from "./routes/track.js";

// mongoose.connect(`mongodb://${process.env.MLAB_AD}:${process.env.MLAB_PW}@ds060977.mlab.com:60977/brainiark`);
// mongoose.Promise = global.Promise;

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;


// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/favicon.ico', express.static('images/favicon.ico'));

// app.use(flash());
// app.use(session(sess));
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/", appRoutes);
app.use("/practice", practiceRoutes);
app.use("/account", accountRoutes);
// app.use("/track", trackRoutes);

// app.get('env') === 'production' ? (app.set('trust proxy', 1), sess.secure = true) : {}

// Error handling middleware
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error.ejs', { 
    status: err.status || 500,
    message: err.message,
    error: {}
  });
});


app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
