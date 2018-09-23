const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const api = require("./api");
const cors = require('cors');
const path = require("path");
const logger = require("./logger");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({origin: ["https://editor.swagger.io", "http://localhost:8080"]}));
app.use(express.static(path.join(__dirname, 'static')));
app.use("/api", api);

app.listen(port, () => logger.info(`App listening on port ${port}`));

