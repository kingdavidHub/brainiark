import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());


const PORT = process.env.LOCAL_PORT || 3000;


// middleware
//! no need for express static since i am focusing on API here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/favicon.ico', express.static('images/favicon.ico'));




app.get("/v1/api", (req, res) => {
  try {
    res.status(200).json({
      msg: "Hey there talking to the backend API endpoint"
    })
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
})



// routes
// import indexRouter from "./routes/index.js";

// app.use("/", indexRouter);


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


app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT} 🚀🚀`);
});
