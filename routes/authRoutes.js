const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Feedback Server');
  });

  // attempt authentication (get code)
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // code returned (get user profile)
  app.get('/auth/google/callback', passport.authenticate('google'));
};