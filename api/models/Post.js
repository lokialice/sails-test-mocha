/* eslint-disable linebreak-style */
/**
* Post.js
*/

module.exports = {
  attributes: {
    title: {type: 'string'},
    body: {type: 'string'},   
    comments: {model: 'Comment'}
  }
};