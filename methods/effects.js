"use strict";
/**
 * @api {post} /effects[?normalize[&desaturate[=:level]]] Apply effects
 * @apiName Effects
 * @apiGroup Methods
 *
 * @apiDescription Apply effects/filters to the image.  Return an image as binary or base 64 encoded string
 * @apiParam [normalize=""] Optional Default Use normalize filter
 * @apiParam [desaturate="50"] Optional Use desaturation filter
 *
 * @apiUse CommonAPIErrors
 * @apiUse ReturnTypeParam
 */

module.exports = (req,res,next)=>{
    let filter;
    //without any params  - do the normalize
    if(Object.is(req.query, {}) || req.query.hasOwnProperty('normalize')){
        req.jimp.normalize();
    }

    //desaturate
    if(req.query.hasOwnProperty('desaturate')){
        let param =  (req.query.desaturate)?parseInt(req.query.desaturate):50;
        req.jimp.color([
            { apply: 'desaturate', params: [ param ] }
        ]);

    }
    res.done = true;
    next();
};