const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const express = require("express");
const setParser = require("../utils");
const routes = require("../routes/routes.js");

const app = express();
setParser(app);
routes(app);

chai.use(chaiHttp);

describe('api text', function () {
    it('should be the base healthcheck', function (done) {
        chai.request(app)
            .get('/api')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.a('object');
                res.text.should.equal('Health Check Api');
                done();
            });
    });

    it('should respond url params with GET', function (done) {
        chai.request(app)
            .get('/api/Hans%20Aparicio')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.a('object');
                res.text.should.equal('Hans Aparicio');
                done();
            });
    });

    it('should respond body with POST', function (done) {
        chai.request(app)
            .post('/api')
            .send({'text': 'Hans Aparicio'})
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.a('object');
                res.text.should.equal('Hans Aparicio');
                done();
            });
    });

    it('should not respond with bad URL', function (done) {
        chai.request(app)
            .get('/apixxxx')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});