const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const supplierroutes = require('./routes/tokoroutes'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/supplier', supplierroutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});