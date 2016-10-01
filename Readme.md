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

#Comments
I'm not sure that I fully understand the idea. 
In common case on the first step user uploads an image and gets the resource identifier in response and all next operations are made using this resource. 

In our case seems that we have to upload file for each operation. 
 No need for persistent storage, the better :)
  
  
 
   