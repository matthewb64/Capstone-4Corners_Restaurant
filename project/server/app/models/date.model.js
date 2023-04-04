module.exports = (sequelize, Sequelize) => { // declaring date model
const Date = sequelize.define("dates", { // define model in selected table
    date: {
        type: Sequelize.DATEONLY
    },
    time: {
        type: Sequelize.TIME
    },
    datetime: {
        type: Sequelize.DATE
    }
});

return Date; // return declared model
};