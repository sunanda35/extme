import server from '../server';
import chai, { expect } from 'chai';
// import { describe} from 'mocha';
import chaiHttp from 'chai-http';
// var assert = require('assert');

describe('Task Apis', () => {
  it('It should be done', (done) => {
    chai
      .request(server)
      .get('/api/terms')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
