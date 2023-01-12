const express = require('express');
const router = express.Router();
const data = require('../data');
const stocksData = data.stocks;

router.get('/:id', async (req, res) => {
  try {
    const stocks = await peopleData.getStocksById(req.params.id);
    res.json(stocks);
  } catch (e) {
    res.status(404).json({ message: 'Stock Not Found.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const stockList = await stocksData.getAllStocks();
    res.json(stockList);
  } catch (e) {
    res.status(500).send();
  }
});



module.exports = router;