const hotels = require('../region-hotels.json');
const filters = require('../page-filters.json');

const getRegionHotels = async (req, res) => {
  try {
    res.status(200).json(hotels);
  } catch (error) {
    res.status(404).send({
      message: 'An error occurred while fetching region hotels data.',
    });
  }
};

const getRegionHotelByRegion = async (req, res) => {
  const { region } = req.params;
  const { checkIn, checkOut } = req.query;

  // const filteredHotels = hotels.filter((h) => h.region === region);
  const filteredHotels = hotels.map((hotel) => ({
        ...hotel,
        hasCalculatedPrice: checkIn && checkOut ? true : false,
      }));

  const responseWithHotels = {
    region,
    numberOfHotels: filteredHotels.length,
    hotels: filteredHotels,
    filters: filters,
    searchOption : {
          value: region,
          label: region,
          id: 0,
          type: "location",
          description: "",
        },
  };

  const responseWithoutHotels = {
    region,
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

module.exports = { getRegionHotels, getRegionHotelByRegion };
