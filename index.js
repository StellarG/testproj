const express = require('express');
// const db = require('./config/config.js');
const models = require('./application/models/users.js');
const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


// console.log('data', data);

app.get('/', async (req, res) => {
    let data = await models.users.findAll();
    res.json({
        code: 200,
        message: 'Hello World!',
        data: data
    })
});

module.exports = app;