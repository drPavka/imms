"use strict";
/**
 * @apiDefine CommonAPIErrors
 * @apiError No_file File is not attached to the request
 * @apiError Wrong_file_data File has unappreciated mime type.
 *
 */

/**
 * @apiDefine ReturnTypeParam
 * @apiParam [base64] Return image as base64 encoded string
 *
 */

/**
 * @api {post} /validate Validate
 * @apiName Validate
 * @apiDescription Check if uploaded image is valid. Return an image as binary or base 64 encoded string
 * @apiGroup Methods
 *
 *
 * @apiUse CommonAPIErrors
 * @apiUse ReturnTypeParam
 */


/**
 *
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res,next)=> {
    res.done = true;
    next();
}