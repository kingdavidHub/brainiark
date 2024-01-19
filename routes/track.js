import { Router } from 'express';
import middleware from '../middleware/secure';
const {pages_security} = middleware
const router = Router();

router
  .get('/', pages_security, (req, res) => {
      res.render('profile/track.ejs', {
          user: req.user
      });
  })
  .get('/math', pages_security, (req, res) => {
      res.render('profile/track/math.ejs', {
          user: req.user
      });
  })
  .get('/math/basic-1', pages_security, (req, res) => {
      res.render('profile/track/math/basic-1.ejs', {
          user: req.user,
          session: 'Maths'
      });
  })


export default router;