const request = require('supertest');
const server = require('../api/server.js');

describe('register route', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })

    describe('/register', () => { 
         // creates new user - (need to add a new name and uncomment when running tests)
        //  it('should return 201', () => {
        //     return request(server)
        //         .post('/api/auth/register')
        //         .send({username: 'John', password: 'password'})
        //         .then(res => {
        //             expect(res.status).toBe(201);
        //         });
        // });
        // checks for json object
        it('return json object', () => {
            return request(server)
            .post('/api/auth/register')
            .send({username: 'John', password: 'password'})
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
        });
        
    });

    // login and return 200
    describe('/login', () => {
        it('should return a 200 OK', () => {
            return request(server)
            .post('/api/auth/login')
            .send({ username: 'John', password: 'password' })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        // return json object after loggin in
        it('should return json object', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'John', password: 'password' })
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                });
        });
    });
});