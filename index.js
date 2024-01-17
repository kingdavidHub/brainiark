import express from 'express';
// var mongoose = require('mongoose');
// var favicon = require('serve-favicon');
// var path = require('path');
// var flash = require('connect-flash');
// var session = require('cookie-session');
// var passport = require('passport');
// var bodyParser = require('body-parser');
// var sess = require('./config/session');

// require('./config/passport');
// require('now-env');

// var appRoutes = require('./routes/index');
// var practiceRoutes = require('./routes/practice');
// var accountRoutes = require('./routes/account');
// var trackRoutes = require('./routes/track');


// mongoose.connect(`mongodb://${process.env.MLAB_AD}:${process.env.MLAB_PW}@ds060977.mlab.com:60977/brainiark`);
// mongoose.Promise = global.Promise;

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(favicon('favicon.ico'));
// app.use(bodyParser.json());
// app.use(flash());
// app.use(session(sess));
// app.use(passport.initialize());
// app.use(passport.session());


// app.use('/', appRoutes);
// app.use('/practice', practiceRoutes);
// app.use('/account', accountRoutes);
// app.use('/track', trackRoutes);

// app.get('env') === 'production' ? (app.set('trust proxy', 1), sess.secure = true) : {}

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.render('error', {
       status: err.status,
       message: err.message
    });
})


app.listen(3000, () => {
    console.log(`Server listening at port 3000`);
})