const { sequelize } = require("../models");
const db = require("../models");

const Date = db.date;

exports.dates = async (req, res) => { // getting all dates controller
    try
    {
        const date = await Date.findAll(); // find all dates in dates table db
        res.status(200).send({dates: date}); // return finded dates in response body
    }
    catch(err)
    {
        res.status(500).send({ message: err.message });
    }
}