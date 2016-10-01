var express    = require('express');
var app        = express();
var bp = require('body-parser');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

var port = process.env.PORT || 8080;

var router = express.Router();
var validate = require('./methods/validate');
var effects = require('./methods/effects');

router.use((req, res, next)=>{
    console.log('validate file data for any request');
    if(!validate(req)){
        next(new Error('Not Valid'));
    }
    next();
});

router.post('/effects', effects);

app.use('/api', router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Method not found');
    err.status = 404;
    next(err);
});

// error handler

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
});

app.listen(port);


console.log('start listening on port ' + port);