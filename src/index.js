const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//starting the server
app.listen(app.get('port'), function() {
    console.log(`Example app listening on port ${app.get('port')}!`);
});