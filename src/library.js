class Library {
    constructor() {
        this.uid = 0;
        this.books = new Map();
        this.addBook({title: "1984", author: "George Orwell"});
        this.addBook({title: "War and Peace", author: "Leo Tolstoy"});
        this.addBook({title: "Robinson Crusoe", author: "Daniel Defoe"});
    }


    getAllBooks() {
        return Array.from(this.books.values());
    }

    getBook(bookId) {
        return this.books.get(bookId);
    }

    addBook(book) {
        const id = this.uid++;
        this.books.set(id, {id, title: book.title, author: book.author});
        return book;
    }

    hasBookId(bookId) {
        return this.books.has(bookId);
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

}


module.exports = Library;