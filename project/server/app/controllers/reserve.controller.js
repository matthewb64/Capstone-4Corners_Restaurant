const { sequelize } = require("../models");
const db = require("../models");

const User = db.user;
const Reservation = db.reservation;
const Date = db.date;

exports.reserve = async (req, res) => { // reservation reserve controller
    try
    {
        const date = await Date.create({ // add date record to dates table using request values
            date: req.body.date,
            time: req.body.time,
            datetime: req.body.datetime,
        });
        const reservation = await Reservation.create({ // add reservation record to reservations table using request values
            restaurant: req.body.restaurant,
            guests_number: req.body.guests_number,
            occasion: req.body.occasion,
            guest_name: req.body.guest_name,
            guest_surname: req.body.guest_surname,
            guest_email: req.body.guest_email,
            guest_phone: req.body.guest_phone,
            credit_number: req.body.credit_number,
        });
        const user = await User.findByPk(req.body.user_id); // find user where PRIMARY KEY == request user id
        reservation.setDate(date); // Connect created date record with created reservation method
        user.addReservation(reservation); // Add created reservation to finded user record
        res.send({ message: "Reservation was created successfully!" });
    }
    catch(err)
    {
        res.status(500).send({ message: err.message });
    }
}
exports.unreserve = async (req, res) => {
    try
    {
        const reservation = await Reservation.destroy({where: {id: req.body.id}})
            .then(async() => {
                await Date.destroy({where: {reservationId: req.body.id}});
            });
        res.send({ message: "Reservation was deleted successfully!" });
    }
    catch(err)
    {
        res.status(500).send({ message: err.message });
    }
}
exports.getreservation = async (req, res) => { // get reservation controller
    try
    {
        const reservation = await Reservation.findAll({where : {userId: req.body.user_id} , include: Date}); // find all reservations where user id == request user id with connected dates
        res.send({reservation: reservation}); // retrieve reservations
    }
    catch(err)
    {
        res.status(500).send({ message: err.message });
    }
}