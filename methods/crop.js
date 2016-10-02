"use strict";
/**
 * @api {post} /crop?[x=0][&y=0][&]h=:height&w=:width Crop image
 * @apiName Crop
 * @apiGroup Methods
 *
 * @apiDescription Crop image.  Return modified image as binary or base 64 encoded string
 * @apiParam [x="0"] GET Optional X offset
 * @apiParam [y="0"] GET Optional Y offset
 * @apiParam w GET Mandatory cropped area width
 * @apiParam h GET Mandatory cropped area height
 *
 * @apiError Missing_param width and height params are required
 * @apiUse CommonAPIErrors
 * @apiUse ReturnTypeParam
 *
 */

module.exports = (req, res, next) => {
    let queryParams = {'x': 1, 'y': 1, 'w': '', 'h': ''};
    let params = [];//the same order as in queryParams
    //prepare params array that will contains all values needed for crop method
    Object.keys(queryParams).forEach(function (key) {
        let value = queryParams[key];

        if ((value !== '') || (typeof req.query[key] !== 'undefined')) {
            params.push((req.query[key])?parseInt(req.query[key]):value);
        }
        else {
            throw new Error('Missing_param_' + key);
        }
    });

    //do the job
    req.jimp.crop.apply(req.jimp, params);

    res.done = true;
    next();
};