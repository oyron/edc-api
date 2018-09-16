"use strict";

const express = require('express');
const router = express.Router();
const logger = require("./logger");
const Library = require("./library");


router.all('*', logRequest);
router.get('/books/:id', getBook);
// ADD ENDPOINTS HERE
router.use(unknownUrlHandler);
router.use(errorHandler);

const library = new Library();

function getBook(req, res) {
    const bookId = Number(req.params.id);
    if (library.hasBookId(bookId)) {
        res.send(library.getBook(bookId));
    }
    else {
        res.status(404).send(`Book with id ${bookId} not found`);
    }
}


function logRequest(req, res, next) {
    let payloadLog = "";
    if (Object.keys(req.body).length > 0) {
        payloadLog = "Payload: " + JSON.stringify(req.body);
    }
    logger.debug(`${req.method} ${req.url} ${payloadLog}`);
    next();
}

function unknownUrlHandler(req, res)  {
    logger.error(`Non existing API route: ${req.method} ${req.originalUrl}`);
    res.status(400).send("Bad request - non existing API route");
}

function errorHandler (err, req, res, next) {
    logger.error(err.stack);
    res.status(500).send(err.stack);
}

module.exports = router;