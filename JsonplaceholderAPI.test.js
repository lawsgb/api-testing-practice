const request = require('supertest')

describe('Perform GET request to get all comments from a post', () => {
    it('responds with a 200 status code', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts/1'
        request(endpoint)
            .get('/comments')
            .expect(200, done)
    })
})

describe('Perform GET request to get all photos from an album', () => {
    it('responds with a 200 status code', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/albums/1'
        request(endpoint)
            .get('/photos')
            .expect(200, done)
    })
})

describe('Perform GET request to get all albums from a user', () => {
    it('responds with a 200 status code', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/users/1'
        request(endpoint)
            .get('/albums')
            .expect(200, done)
    })
})

describe('Perform GET request to get all todos from a user', () => {
    it('responds with a 200 status code', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/users/1'
        request(endpoint)
            .get('/todos')
            .expect(200, done)
    })
})

describe('Perform GET request to get all posts from a user', () => {
    it('responds with a 200 status code', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/users/1'
        request(endpoint)
            .get('/posts')
            .expect(200, done)
    })
})

describe('Perform POST request to create a comment associated to a post', () => {
    it('accepts a valid Comment object', (done) => {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts/1'

        let newValidComment = {
            "name": "some subject written in latin",
            "email": "notARealEmailAddress@blah.com",
            "body": "some body written in latin"
        }

        request(endpoint)
            .post('/comments')
            .send(newValidComment)
            .set('Accept', 'application/json')
            .expect(201)
            .expect({"name": "some subject written in latin", "email": "notARealEmailAddress@blah.com", "body": "some body written in latin", "postId": "1", "id": 501})
            .end(err => {
                if (err) return done(err)
                done()
            })
    })
})

