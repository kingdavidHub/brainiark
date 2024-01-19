export default {
  pages_security: (req, res, next) => {
    if(req.user || req.isAuthenticated()){
        return next()
    }else{
          res.redirect('/');
    }
  }
}