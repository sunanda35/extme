import chai from 'chai';
import chaiHttp from 'chai-http';
// import server from '../../server';

chai.should();
chai.use(chaiHttp);
// describe('Terms', () => {
//   describe('/GET terms', () => {
//     it('it should GET all terms', (done) => {
//       chai
//         .request(server)
//         .get('/api/v1/terms')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('status').eql(200);
//         });
//       done();
//     });
//   });
// });
