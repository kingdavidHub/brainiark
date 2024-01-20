import { Router } from 'express';
const router = Router();

router
  .get('/', (req, res) => res.render("practice.ejs", { app: 'Brainiark', title: 'practice'}))
  .get('/english', (req, res) => res.render('practice/english.ejs', {session: 'English'}))
  .get('/maths', (req, res) => res.render('practice/maths.ejs', {session: 'Maths'}))
  .get('/chemistry', (req, res) => res.render('practice/chemistry.ejs', {session: 'Chemistry'}))
  .get('/physics', (req, res) => res.render('practice/physics.ejs', {session: 'Physics'}))
  .get('/account', (req, res) => res.render('practice/account.ejs', {session: 'Account'}))
  .get('/biology', (req, res) => res.render('practice/biology.ejs', {session: 'Biology'}))
  .get('/government', (req, res) => res.render('practice/government.ejs', {session: ' Government'}))



export default router;