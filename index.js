import express from "express";
// const mongoose = require('mongoose');
// const favicon = require('serve-favicon');
// const path = require('path');
// const flash = require('connect-flash');
// const session = require('cookie-session');
// const passport = require('passport');
// const bodyParser = require('body-parser');
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

app.use(express.static("public"));
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(favicon('favicon.ico'));
// app.use(bodyParser.json());
// app.use(flash());
// app.use(session(sess));
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/", appRoutes);
app.use("/practice", practiceRoutes);
app.use("/account", accountRoutes);
// app.use("/track", trackRoutes);

// app.get('env') === 'production' ? (app.set('trust proxy', 1), sess.secure = true) : {}

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.render("error", {
//     status: err.status,
//     message: err.message,
//   });
// });

app.listen(3000, () => {
  console.log(`Server listening at port 3000`);
});
