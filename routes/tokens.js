const jwt = require("jsonwebtoken");

module.exports = (app) => {
  const config = app.libs.config;
  const Users = app.db.models.Users;
  app.post("/token", (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({ where: { email: email } })
        .then((user) => {
          if (Users.isPassword(user.password, password)) {
            const payload = { id: user.id };
            res.json({
              token: jwt.sign(payload, config.jwtSecret),
            });
          } else {
            res.sendStatus(401);
          }
        })
        .catch((error) => res.sendStatus(401));
    } else {
      res.sendStatus(401);
    }
  });
};
