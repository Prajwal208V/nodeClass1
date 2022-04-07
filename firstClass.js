const http = require('http'); //es5 syntax
//single API 
//creating a server
http.createServer(function (request, response) {
    // response.write("Hello World!"); //normal txt
     response.write('<h2>hey hello!</h2>');  // html 
    // response.write(JSON.stringify({ name: "Prajwal", from: "Bengaluru" }));// objects

    //closing the server 
    response.end();
}).listen(8000)// port number 



// import {---} from "---" //es6 syntax 
//lambda function :cloud 

//experss framework
// allows you to combaine the child routes or all the routes to default route 


/*HTTP request methods: HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.
GET :- The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

HEAD:-  The HEAD method asks for a response identical to a GET request, but without the response body. 

POST:- The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

PUT:- The PUT method replaces all current representations of the target resource with the request payload. 

DELETE:- The DELETE method deletes the specified resource.

Browser to server : HTTP REQUEST 
with HTTP and our API is made up of operations using these methods like get and post,
GET
->We can combine the name of the method with the collection name to get the data that the server  ex: GET/friends 
->Or we could add an I.D. after the name of our collection to specify that we want to get the data about a specific friend ex: GET/friends/5 

POST
-> if we wanted to save a message and send it to our friends. 
ex:POST/messege
POST/messege/5 this is not possible in post but we can do this by using PUT method 

PUT 
->want to update a specific message to change some text or add a photo. And so for that, we would use a put request,
which allows us to replace the message that we specify with the message that we pass in through that request
ex:PUT/messege/5

DELETE
-> ex:DELETE/messege/5
Every one of these requests has four main parts that it's made up of.
1.First one is method (get, put, post, delete,……)  this defines the operation that the browser wants to perform on the server.

2.PATH :- path to a collection or a specific item of a collection. This path is also sometimes called the resource that we're accessing on the back end

3.BODY:- we can send data to the server by adding a body to our request, which contains the data that we're sending from the browser to the server. This could be in plain text or in a variety of other formats. But the most common format for sending data back and forth over HTTP is JSON,
Usually, we'll have a body on post requests and on put requests where we're updating some data on the server, but not on get. Or delete requests
 
4.Headers:- These are optional properties that you can specify on a request to send additional metadata to the servers. about the request. like the size of the data that you're sending or any authentication information that you need to send so that the server knows that you're allowed to perform that operation with your user. These are optional depending on your use case, 

-> but there's one header that every single request needs It's the host header, which specifies which server your request is being sent to, including sometimes the port number for that site.
The host needs to be specified to verify that you're sending your message to the right server.


Server to Browser : HTTP RESPONSE 
1.Headers
2.Body
3.Status code: status code, which tells us whether the request was successful and if not, it gives us an error code that generally tells us what went wrong.
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
1.Informational responses (100–199) 100series
2.Successful responses (200–299)    200series
3.Redirection messages (300–399)   300series
4.Client error responses (400–499)   400series
5.Server error responses (500–599)  500series
100 series :100 series group has information responses that you generally won't see as a developer. These are used internally by libraries and browsers when, for example, you are sending a large request and you need to indicate that everything is OK and the requests can continue.

200 series: 

300series: 

400series: This means that the browser or whoever is making that request made that request incorrectly and the server isn't able to respond to it. So we have the 400 by request response, which is just a general catch all error.
500series:*/