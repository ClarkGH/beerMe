const chai = require('chai'),
  assert = chai.assert,
  chaiHttp = require('chai-http'),
  server = require('../server/app'),
  should = chai.should();

chai.use(chaiHttp);

// Borrowed code used for understanding
// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WXZdc9Pyvsk

// describe('Blobs', function() {
//   it('should list ALL blobs on /blobs GET');
//   it('should list a SINGLE blob on /blob/<id> GET');
//   it('should add a SINGLE blob on /blobs POST');
//   it('should update a SINGLE blob on /blob/<id> PUT');
//   it('should delete a SINGLE blob on /blob/<id> DELETE');
// });