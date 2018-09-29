const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('/GET api/books', () => {
    it('should GET all the books', (done) => {
        chai.request(server)
            .get('/api/books')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});

describe('/GET api/book/{id}', () => {
    it('should be possible to GET a book by id', (done) => {
        chai.request(server)
            .get('/api/books/0')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                const book = res.body;
                expect(book.id).to.be.a("number");
                expect(book.author).to.be.a("string");
                expect(book.title).to.be.a("string");
                done();
            });
    });

    it('should return 404 if book id is not found', (done) => {
        chai.request(server)
            .get('/api/books/99')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                done();
            });
    });
});

describe('/POST api/books', () => {
    it('should be possible to POST a book', (done) => {
        const author = "Eldar Sætre";
        const title  = "The Statoil Book";

        chai.request(server)
            .post('/api/books')
            .send({author, title})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                const book = res.body;
                expect(book.id).to.be.a("number");
                expect(book.author).to.equal(author);
                expect(book.title).to.equal(title);
                done();
            });
    });
});
