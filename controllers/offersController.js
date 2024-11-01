const offers = require('../offers.json');

const getOffers = async (req, res) => {
  try {
    res.status(200).json(offers);
  } catch (error) {
    res
      .status(404)
      .send({ message: 'An error occurred while fetching offers data.' });
  }
};

module.exports = { getOffers };
