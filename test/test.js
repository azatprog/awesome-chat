'use strict';
/* global describe, it */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

describe('test', () => {
    it('server should run', () => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
            });
    });
});
