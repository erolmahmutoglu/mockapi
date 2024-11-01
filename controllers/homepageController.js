const homepage = require('../homepage.json');

const getHomepage = async (req, res) => {
  try {
    res.status(200).json(homepage);
  } catch (error) {
    res
      .status(404)
      .send({ message: 'An error occurred while fetching homepage data.' });
  }
};

module.exports = { getHomepage };
