const { Post } = require('../models');

const postdata = [
  {
    title: 'First post on The Tech Blog',
    post_url: 'www.google.com',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;