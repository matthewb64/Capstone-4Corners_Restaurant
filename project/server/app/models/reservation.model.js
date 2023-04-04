module.exports = (sequelize, Sequelize) => { // declaring reservation model
const Reservation = sequelize.define("reservations", { // define model in selected table
    restaurant: {
        type: Sequelize.STRING
    },
    guests_number:
    {
        type: Sequelize.INTEGER
    },
    occasion: {
        type: Sequelize.STRING
    },
    guest_name: {
        type: Sequelize.STRING
    },
    guest_surname: {
        type: Sequelize.STRING
    },
    guest_email: {
        type: Sequelize.STRING
    },
    guest_phone: {
        type: Sequelize.STRING
    },
    credit_number: {
        type: Sequelize.BIGINT
    }
});

return Reservation; // return defined model
};