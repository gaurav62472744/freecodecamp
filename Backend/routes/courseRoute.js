const fs = require('fs');
const path = require('path');
const express =require('express')
const cardsDataRoute = express.Router();

// Function to read data from JSON file
function getDataFromFile(filePath) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8').trim());
        return data;
    } catch (error) {
        throw error;
    }
}

cardsDataRoute.get('/', async (req, res) => {
    try {
        const dataFilePath = path.join(__dirname, '../data', 'data.json');
        const data = getDataFromFile(dataFilePath);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = cardsDataRoute;
