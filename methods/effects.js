"use strict";

module.exports = (req,res,next)=>{
    let filter;
    if(Object.is(req.query, {}) || req.query.hasOwnProperty('normalize')){
        req.jimp.normalize();
    }

    if(filter = req.query.hasOwnProperty('desaturate')){
        let param =  (filter)?parseInt(filter):50;
        req.jimp.color([
            { apply: 'desaturate', params: [ param ] }
        ]);

    }

    next();
};