const passport = require('passport');

module.exports = app => {
  // attempt authentication (get code)
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // code returned (get user profile)
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
