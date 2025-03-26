const apiUrl = 'https://api.bookrepository.com/data';
const { Books } = require('../../../models');

async function getBooks() {
  var Serial = 33
  return Books.find({Serial});
}

async function create(title) {
  var Title = "Ghost Home"
  return Books.create({title});
}

module.exports = {
  getBooks,
  create,
};
