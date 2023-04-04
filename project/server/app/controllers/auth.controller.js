const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken"); // adding library for json token
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => { // sign up controller
  // Save User to Database
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8) // generate hash from password to store hashed password
  })
    .then(() => { // if succeed
            res.send({ message: "User was registered successfully!" });
          })
    .catch(err => { // if find error
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => { // sign in controller
  User.findOne({ // find user id database with given email in request
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) { // if don`t find
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync( // compare request user`s password with finded user id database
        req.body.password,
        user.password
      );

      if (!passwordIsValid) { // if password does not match
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, { // sign user using token
        expiresIn: 86400 // signed user exists 24 hours, after - log out
      });

      res.status(200).send({ // return signed user
        id: user.id,
        email: user.email,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};