"use strict";

var express = require('express');
var Jimp = require("jimp");

var app = express();

var bb = require('express-busboy');

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

router.use((request, res, next)=> {
    console.log('validate file data for any request');
    if(!request.files)  next(new Error('No file'));
    else if(!request.files.data)  next(new Error('Wrong file data or bad mime type'));
    else Jimp.read(request.files.data.file).then((jimage)=> {
        request.jimp = jimage;
        next();
    }, (err)=> {
        next(err);
    });
});

router.post('/', (req, res,next)=> {
/*    res.json({
        'message': 'File is validated',
        data: {
            width: req.jimp.bitmap.width,
            height: req.jimp.bitmap.height,
            mime: req.files.data.mimetype
        }
    });*/
    next();
});

router.post('/effects', effects);

//post process
router.use((req, res, next)=>{
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
            //next();
        });
    }
});

app.use('/api', router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Method not found');
    err.status = 404;
    next(err);
});

// error handler

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({message: err.message});
    console.log('error:' + err.message)
});

app.listen(port);


console.log('start listening on port ' + port);