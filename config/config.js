require('dotenv').config({ path: './.env' });

const {
    PORT1: port1,
    PORT2: port2,
    SECRET_KEY: secretKey
} = process.env;

module.exports = {port1, port2, secretKey}