const hotels = require('../hotels.json');

const getHotels = async (req, res) => {
  try {
    res.status(200).json(hotels);
  } catch (error) {
    res
      .status(404)
      .send({ message: 'An error occurred while fetching hotels data.' });
  }
};

const getHotelBySeflink = async (req, res) => {
  const { seflink } = req.params;

  // const hotel = hotels.find((h) => h.seflink === seflink);
  const hotel = hotels[0]

  if (hotel) {
    res.status(200).json(hotel);
  } else {
    res.status(404).send({ message: 'Hotel not found.' });
  }
};

module.exports = { getHotels, getHotelBySeflink };
