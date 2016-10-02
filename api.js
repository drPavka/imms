"use strict";
const API_VERSION = '1';

var express = require('express');
var Jimp = require("jimp");
var bb = require('express-busboy');

var app = express();
bb.extend(app, {
    upload: true,
    mimeTypeLimit: [
        'image/png',
        'image/gif',
        'image/jpg',
        'image/jpeg'
    ]
});

var port = process.env.PORT || 8080;

var router = express.Router();
var effects = require('./methods/effects');
var crop = require('./methods/crop');
var validate = require('./methods/validate');

router.use('/', express.static('doc', {
    dotfiles: 'ignore',
    etag: false,
    maxAge: '1d',
    redirect: false
}));

router.use((request, res, next)=> {
    console.log('validate file data for any request');
    if(!request.files)  next(new Error('No_file'));
    else if(!request.files.data)  next(new Error('Wrong_file_data'));
    else Jimp.read(request.files.data.file).then((jimage)=> {
        request.jimp = jimage;
        next();
    }, (err)=> {
        next(err);
    });
});



router.post('/validate', validate);

router.post('/effects', effects);

router.post('/crop', crop);



//post process
router.use((req, res, next)=>{
    res.set('Access-Control-Allow-Origin', '*');

    if(req.query.hasOwnProperty('base64')){
        req.jimp.getBase64(req.files.data.mimetype, (dummy, src)=>{
            res.send(src);
            next();
        });
    }
    //return as Binary - default
    else {
        req.jimp.getBuffer(Jimp.AUTO, (dummy, buffer)=>{
            res.type(req.files.data.mimetype).send(buffer);
            next();
        });
    }
});

app.use('/api/v' + API_VERSION, router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    if(!res.done){
        var err = new Error('Method_not_found');
        err.status = 404;
        next(err);
    }
    else {
        //next();
    }

});

// error handler

app.use(function (err, req, res, next) {
    if(!res.headersSent)
        res.set('Access-Control-Allow-Origin', '*');

    res.status(err.status || 400);
    res.json({message: err.message});
    console.log('error:' + err.message)
});

app.listen(port);


console.log('start listening on port ' + port);