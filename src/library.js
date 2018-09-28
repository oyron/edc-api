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
        return this.books.get(toNumber(bookId));
    }

    addBook(bookData) {
        const id = this.uid++;
        return this._addBook(id, bookData.title, bookData.author);
    }

    updateBook(bookId, bookData) {
        return this._addBook(toNumber(bookId), bookData.title, bookData.author);
    }

    deleteBook(bookId) {
        this.books.delete(toNumber(bookId));
        return true;
    }

    hasBookId(bookId) {
        return this.books.has(toNumber(bookId));
    }

    _addBook(id, title, author) {
        const book = {id, title, author};
        this.books.set(id, book);
        return book;
    }
}

function toNumber(possibleStringValue) {
    if (typeof possibleStringValue === 'number') {
        return possibleStringValue;
    }
    return Number(possibleStringValue);
}

module.exports = Library;