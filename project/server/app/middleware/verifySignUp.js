const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Email
    User.findOne({ // find user from user table
      where: { // where
        email: req.body.email // email == request email
      }
    }).then(user => {
      if (user) { // if user with that email already exists
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;