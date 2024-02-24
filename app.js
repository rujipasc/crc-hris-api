const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routeAPI = require('./routes/route-api');
const {port1, port2} = require('./config/config');


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routeAPI);

app.listen(port1, () => console.log(`Server is running on port ${port1}`))