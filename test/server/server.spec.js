'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server/server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('server.js', () => {
  beforeEach((done) => {
    app.listen(4444);
    done();
  });

  it('responds to /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });
});