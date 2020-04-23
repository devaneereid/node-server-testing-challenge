const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
            });
        });

        it('should return message UP', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body.message).toBe('up');
                });
        });
    });
    
});