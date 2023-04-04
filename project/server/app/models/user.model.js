module.exports = (sequelize, Sequelize) => { // declaring user model
  const User = sequelize.define("users", { // define model in selected table
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User; //return declared model
};