#Task

Please devise a RESTful API for a microservice for image manipulation. Imagine that users send us new photos and a service should be set up to:
1) Validate the photo
2) Do some processing: desatureate, normalize [1]
3) Crop the photo
* No coding involved!
* We only expect you to design the API interface. How to REST-fully crop the photo, for example? What would be the parameters? What would the requests and responses be like?
* Use whatever means to document the API.
* Please write a brief explanation on how to use the API.
* What technologies would you suggest using for the service?
* What is your take on the latest security threats against imagemagick?

#Setup, build docs  and run
+ ``cd`` to the project's dir
+ ``npm update`` to build the dependencies
+ ``npm install apidoc -g`` to install apidoc http://apidocjs.com/
+ ``apidoc -i methods/  -o doc/`` to build the API documentation
+ ``node api`` to run node server on default port 

If everything is OK,  http://localhost:8080/api/v1 will show you the API documentation.  

#How to test

+ Return as Binary ``curl "http://localhost:8080/api/v1/effects?desaturate=99" -X POST -F "data=@path_to_file" > result_file``
+ Return as string. See __test/client.html__

#Comments
I'm not sure that I fully understand the idea. 
In common case for such types of services on the first step user uploads an image and gets the resource identifier in response and all next operations are made using this resource. 

In our case seems that we have to upload file for each operation. 
 No need for persistent storage, the better :)

The main idea of the API is that user sends image using POST method and gets the response in binary or base 64 string.
    
 
 All parameters are sending using URL query variables. For such a microservice it's quiet enough. In case of more complex service it will better to POST json encoded string with a set of params.

Image processing is implemented using JIMP npm library. 
 
In code two processing filters are used.
1. Pre process filter  - checks uploaded file and creates JIMP object that is used for image manipulations.  
1. Post process filter - build the response of needed type (binary or string)  

   
#Known problems
In case of using wrong method name in URL e.g. http://localhost:8080/api/v1/crsop?w=200&h=330&x=150&y=120 the validation operation is called. Really, I'm not a nodejs ninja, so decide not to spent time solving this issue. 
There are the problems with large files related to the limits of busboy library.   
  
 
   