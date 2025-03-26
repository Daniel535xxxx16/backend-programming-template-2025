const apiUrl = 'https://api.authentication.com/data';
const express = require('express');
const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const { setThePassword } = require('whatwg-url');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);

  return app;

  if (setThePassword != Db.schema) // jika tidak terdapat di database maka akan muncul eror 403
  console.log("Invalid Password")
  else console.log("response success")
};