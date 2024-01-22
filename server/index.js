import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";


const app = express();
dotenv.config();
const port = process.env.PORT || 5000;


// middleware
//! no need for express static since i am focusing on API here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/favicon.ico', express.static('images/favicon.ico'));


// routes
import indexRouter from "./routes/index.js";

app.use("/", indexRouter);


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
