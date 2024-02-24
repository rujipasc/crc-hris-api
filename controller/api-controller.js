const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const hashPassword = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        res.json({ hashed });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const comparePassword = async (req, res) => {
    try {
        const { password, hashed } = req.body;
        const isMatch = await bcrypt.compare(password, hashed);
        res.json({ isMatch });
    } catch (e) {
        res.status(500).json({ message: e.message });
    
    }
};

const generateToken = async (req, res) => {
    try {
        const payload = {
            username: req.body.username,
        };
        const token = await jwt.sign(payload, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (e) {
        res.status(500).json({ message: e.message });
    };
};

const healthCheck = (req, res) => {
    res.json({ message: 'API is working' });
    console.log('API is working');
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    healthCheck
}