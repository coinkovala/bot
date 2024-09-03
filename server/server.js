const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const users = {};

app.post('/updateUser', (req, res) => {
    const { userId, coins, endTime } = req.body;
    users[userId] = { coins, endTime };
    res.sendStatus(200);
});

app.get('/getUser/:userId', (req, res) => {
    const userId = req.params.userId;
    res.json(users[userId] || { coins: 0, endTime: 0 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));