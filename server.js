

const express = require("express");//

const server = express();

const middleware1 = (request, response, next) => {
    console.log("middleware1");
    next(); //block the flow and take it back to the rquest route
}
const middleware2 = (request, response, next) => {
    console.log("middleware2");
    next();
}
const middleware3 = (request, response, next) => {
    console.log("middleware3");
    next();
}

server.use(middleware1);

server.get('/', middleware3, (request, response) => {
    response.send("hello world!");
})

server.get('/user', (request, response) => {
    response.send({ name: "Prajwal V", age: 23 });
})

server.get('/user2', middleware2, (request, response) => {
    response.send("<h2>Express so cool<h2/>");
})
// server.listen(3001, () => {
//     console.log("express is so cool runing at posrt 3001");
// })
server.listen(5000);

//http methods
//crud :create read updtated delete
//get post put delete

//middlewares ::: majore use case authentication
// is a function,
//takes thress parameters 1.request 2.response 3.next
//we can create multiple middlewares

// need middleware:::
// hoc in react, middleware is a function which will be executed  first before any route gets executed  

/*Use of DNS: DNS use to figure out where that site lives, which IP address we should use when communicating with it. And we can then make requests to our HTTP web server to get data back from it.

API Application Programming Interface:(which is a software intermediary that allows two applications to talk to each other)  example:-  browser and server
->The thing that defines how our web server responds to these requests is our API. The API tells us what kinds of functions the server should support and how those functions should be used.
We can implement our API on the server in Node, in Python or any other programming language.

->What matters is that the language that we use when reacting to these requests and responding to them is HTTP, which is the common way that the browser and the server can use to understand what both sides.
So the browser is speaking HTTP to the server, and the server can respond again, it's speaking a HTTP. */