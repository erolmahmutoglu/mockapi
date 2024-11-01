const hotels = require('../region-hotels.json');

const getRegionHotels = async (req, res) => {
  try {
    res.status(200).json(hotels);
  } catch (error) {
    res.status(404).send({
      message: 'An error occurred while fetching region hotels data.',
    });
  }
};

const getRegionHotelBySeflink = async (req, res) => {
  const { seflink } = req.params;

  const hotel = hotels.filter((h) => h.seflink === seflink);

  if (hotel) {
    res.status(200).json(hotel);
  } else {
    res.status(404).send({ message: 'Hotel not found.' });
  }
};

module.exports = { getRegionHotels, getRegionHotelBySeflink };
