const reservation = require('../reservation.json');

const getReservation = async (req, res) => {
  try {
    res.status(200).json(reservation);
  } catch (error) {
    res
      .status(404)
      .send({ message: 'An error occurred while fetching homepage data.' });
  }
};

module.exports = { getReservation };
