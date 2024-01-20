import express from 'express';
// import { authenticate } from 'passport';
// import async from 'async';
// import crypto from 'crypto';
// import nodemailer from 'nodemailer';
// import { find } from '../models/user';
// import middleware from '../middleware/secure';
// const {
//     pages_security
// } = middleware

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs', {
        // message: req.flash('signupMessage')
        message: "A function goes here"
    })
});

// router.post('/signup', authenticate('local-signup', {
//     successRedirect: '/home',
//     failureRedirect: '/#signup',
//     failureFlash: true
// }));

// router.get('/signin', (req, res) => res.render('signin', {
//     message: req.flash('signinMessage')
// }));

// router.post('/signin', authenticate('local-signin', {
//     successRedirect: '/home',
//     failureRedirect: '/signin',
//     failureFlash: true
// }));

// router.get('/home', pages_security, (req, res) => res.render('profile/home', {
//     user: req.user
// }))

router.get('/about', (req, res) => {
    res.render('about.ejs');
});

router.get('/support', (req, res) => res.render('support.ejs', {
    user: req.user
}));


// router.get('/signout', pages_security, (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/forgot', (req, res) => {
//     res.render('forgot');
// });

// router.get('/library', pages_security, (req, res) => {
//     res.render('profile/library', {
//         user: req.user
//     });
// });

// router.get('/privacy', (req, res) => {
//     res.render('privacy')
// })

// router.get('/user', (req, res) => {
//     find()
//         .then(user => {
//             res.json(user);
//         })
//         .catch(err => {
//             res.json(err);
//         })
// });

export default router;