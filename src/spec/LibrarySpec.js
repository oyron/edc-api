describe("Player", function() {
    const Library = require('../Library');
    let library;

    beforeEach(function() {
        library = new Library();
    });


    it("should be possible to list all books", function() {
        const books = library.getAllBooks();
        expect(books).toBeDefined();
        expect(Array.isArray(books)).toBeTruthy();
    });


    it("should be possible to get a single book, by numeric id", function() {
        const book = library.getBook(1);
        expect(typeof(book) === 'object').toBeTruthy();
        expect(book.id).toBeDefined();
        expect(book.author).toBeDefined();
        expect(book.title).toBeDefined();
    });


    it("should be possible to get a single book, by string id", function() {
        const book = library.getBook("1");
        expect(typeof(book) === 'object').toBeTruthy();
    });


    it("should be possible to add a new book", function() {
        const title = "The Statoil Book";
        const author = "Eldar Sætre";
        const book = library.addBook(title, author);
        expect(typeof(book) === 'object').toBeTruthy();
        expect(book.id).toBeDefined();
        expect(book.author).toBe(author);
        expect(book.title).toBe(title);
    });


    it("should be possible to update an existing book, by numeric id", function() {
        const title = "The Statoil Book";
        const author = "Eldar Sætre";
        const bookId = 1;
        expect(library.hasBookId(bookId)).toBeTruthy();
        const book = library.updateBook(bookId, title, author);
        expect(typeof(book) === 'object').toBeTruthy();
        expect(book.id).toBe(bookId);
        expect(book.author).toBe(author);
        expect(book.title).toBe(title);
    });


    it("should be possible to update an existing book, by string id", function() {
        const title = "The Statoil Book";
        const author = "Eldar Sætre";
        const bookId = "1";
        expect(library.hasBookId(bookId)).toBeTruthy();
        const book = library.updateBook(bookId, title, author);
        expect(typeof(book) === 'object').toBeTruthy();
        expect(book.id).toBe(Number(bookId));
        expect(book.author).toBe(author);
        expect(book.title).toBe(title);
    });


    it("should be possible to delete an existing book, by numeric id", function() {
        const bookId = 1;
        expect(library.hasBookId(bookId)).toBeTruthy();
        library.deleteBook(bookId);
        expect(library.hasBookId(bookId)).toBeFalsy();
    });


    it("should be possible to delete an existing book, by string id", function() {
        const bookId = "1";
        expect(library.hasBookId(bookId)).toBeTruthy();
        library.deleteBook(bookId);
        expect(library.hasBookId(bookId)).toBeFalsy();
    });


});
