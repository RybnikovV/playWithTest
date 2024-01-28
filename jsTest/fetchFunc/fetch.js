const axios = require('axios');
const mapArrToString = require('../objTest/mapArrToString');

const getPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const ids = response.data
    .filter(post => {
      return post.id < 5
    }).map(post => {
      return post.id
    });
  return mapArrToString(ids)
};

module.exports = getPosts;