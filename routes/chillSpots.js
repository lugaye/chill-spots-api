const express = require('express');
const db = require('../db/db');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    db.query('SELECT * FROM chill_spots', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.post('/', authenticateToken, (req, res) => {
    const { name, location, description } = req.body;
    db.query('INSERT INTO chill_spots (name, location, description) VALUES (?, ?, ?)', [name, location, description], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Chill spot added' });
    });
});

module.exports = router;
