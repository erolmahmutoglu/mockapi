const themes = require('../holiday-themes.json');

const getThemes = async (req, res) => {
  try {
    res.status(200).json(themes);
  } catch (error) {
    res
      .status(404)
      .send({ message: 'An error occurred while fetching themes data.' });
  }
};

module.exports = { getThemes };
