var passport = require("passport"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (app) => {
  const Users = app.db.models.Users;
  const config = app.libs.config;

  strategy = new JwtStrategy(
    {
      secretOrKey: config.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (jwt_payload, done) => {
      Users.findById(jwt_payload.id, "-password")
        .then((user) => {
          if (user) {
            return done(null, {
              id: user.id,
              email: user.email,
            });
          }
          return done(null, false);
        })
        .catch((error) => done(error, null));
    }
  );

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", config.jwtSession);
    },
  };
};
