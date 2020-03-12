

module.exports = function (app, passport) {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      res.cookie('cookie', req.user._id);
      // console.log('reees',res);
      
      // Successful authentication, redirect home.
      res.redirect(process.env.HEADLINES);
    });

}
