//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));

//global variables


//server
app.listen(port, () => {
    console.log('server up on port');
})