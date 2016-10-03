define({ "api": [
  {
    "type": "post",
    "url": "/crop?[x=0][&y=0][&]h=:height&w=:width",
    "title": "Crop image",
    "name": "Crop",
    "group": "Methods",
    "description": "<p>Crop image.  Return modified image as binary or base 64 encoded string</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "x",
            "defaultValue": "0",
            "description": "<p>GET Optional X offset</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "y",
            "defaultValue": "0",
            "description": "<p>GET Optional Y offset</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "w",
            "description": "<p>GET Mandatory cropped area width</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "h",
            "description": "<p>GET Mandatory cropped area height</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "base64",
            "description": "<p>Return image as base64 encoded string</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Missing_param",
            "description": "<p>width and height params are required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No_file",
            "description": "<p>File is not attached to the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Wrong_file_data",
            "description": "<p>File has unappreciated mime type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "methods/crop.js",
    "groupTitle": "Methods"
  },
  {
    "type": "post",
    "url": "/effects[?normalize[&desaturate[=:level]]]",
    "title": "Apply effects",
    "name": "Effects",
    "group": "Methods",
    "description": "<p>Apply effects/filters to the image.  Return an image as binary or base 64 encoded string</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "normalize",
            "description": "<p>Optional Default Use normalize filter</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "desaturate",
            "defaultValue": "50",
            "description": "<p>Optional Use desaturation filter</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "base64",
            "description": "<p>Return image as base64 encoded string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "methods/effects.js",
    "groupTitle": "Methods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No_file",
            "description": "<p>File is not attached to the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Wrong_file_data",
            "description": "<p>File has unappreciated mime type.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/validate",
    "title": "Validate",
    "name": "Validate",
    "description": "<p>Check if uploaded image is valid. Return an image as binary or base 64 encoded string</p>",
    "group": "Methods",
    "version": "0.0.0",
    "filename": "methods/validate.js",
    "groupTitle": "Methods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "No_file",
            "description": "<p>File is not attached to the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Wrong_file_data",
            "description": "<p>File has unappreciated mime type.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "base64",
            "description": "<p>Return image as base64 encoded string</p>"
          }
        ]
      }
    }
  }
] });
