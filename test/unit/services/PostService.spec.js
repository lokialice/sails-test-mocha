/* eslint-disable linebreak-style */
/* global PostService */

// Here is were we init our 'sails' environment and application
require('../../boostrap');

// Here we have our tests
describe('The PostService', () => {

  before((done) => {
    Post.create({})
     .then(Post.create({})
       .then(Post.create({})
         .then(() => {
           done();
         })
       )
     );
  });

  it('should return all posts with their comments', (done) => {
    PostService
     .getPostsWithComments()
     .then((posts) => {
       posts.should.be.an('array');
       posts.should.have.length(2);
       done();
     })
     .catch(done);

  });

});
