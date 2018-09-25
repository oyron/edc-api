class Library {
    constructor() {
        this.uid = 0;
        this.books = new Map();
        this.addBook({title: '1984', author: 'George Orwell'});
        this.addBook({title: 'War and Peace', author: 'Leo Tolstoy'});
        this.addBook({title: 'Robinson Crusoe', author: 'Daniel Defoe'});
    }

    getAllBooks() {
        return Array.from(this.books.values());
    }

    getBook(bookId) {
        return this.books.get(bookId);
    }

    addBook(bookData) {
        const id = this.uid++;
        const book = {id, title: bookData.title, author: bookData.author};
        this.books.set(id, book);
        return book;
    }

    updateBook(bookId, book) {
        book.id = bookId;
        this.books.set(bookId, book);
        return true;
    }

    deleteBook(bookId) {
        this.books.delete(bookId);
        return true;
    }

    hasBookId(bookId) {
        return this.books.has(bookId);
    }
}

module.exports = Library;