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

  const filteredHotels = hotels.filter((h) => h.seflink === seflink);

  const responseWithHotels = {
    region: seflink,
    numberOfHotels: filteredHotels.length,
    hotels: filteredHotels,
  };

  const responseWithoutHotels = {
    region: seflink,
    numberOfHotels: 0,
    hotels: [],
  };

  if (filteredHotels.length) {
    res.status(200).json(responseWithHotels);
  } else if (filteredHotels.length === 0) {
    res.status(200).json(responseWithoutHotels);
  } else {
    res.status(404).send({ message: 'Aranan bölge/tema otelleri bulunamadı.' });
  }
};

module.exports = { getRegionHotels, getRegionHotelBySeflink };
