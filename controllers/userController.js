const user = require('../user.json');

const getUser = async (req, res) => {
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send({ message: 'Aradığınız kullanıcı bulunamadı.' });
  }
};

module.exports = { getUser };
