//ME (IE. FEEL FREE TO CHANGE)
var express = require('express');
var io = require('socket.io')(80);
var cfg = require('./config.json');
var http = require('http'),
var fs = require('fs'),
     index = fs.readFileSync(__dirname + '/index.hbs');

     // Send index.html to all request
     var app = http.createServer(function(req, res) {
         res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(index);
            });

   // Socket.io server listens to our app
    var io = require('socket.io').listen(app);

      io.on('connection', function(socket) {
  // Use socket to communicate with this particular client only, sending it it's own id
      socket.on('payment_info', function(info){
          makeInfo(info);
      });

      socket.emit('error', {data: 'there was an error reading your information.', id: socket.id});
      socket.emit('success', {data: 'Your payment has been accepted!', id: socket.id});
       });

   function makeInfo(data) {
     var cc_num = data.number;
     var cc_cvc = data.cvc;
     var cc_exp_mo = data.exp-month;
     var cc_exp_yr = data.exp-year;
     var amt = data.cost;
   }

      app.listen(3000);

 //FROM THE MASTERCARD API:     

var simplify = require("simplify-commerce"),
    client = Simplify.getClient({
        publicKey: 'YOUR_PUBLIC_API_KEY',
        privateKey: 'YOUR_PRIVATE_API_KEY'
    });

client.payment.create({
    amount : amt,
    description : "payment description",
    invoice : "[INVOICE ID]",
    card : {
       expMonth : cc_exp_mo,
       expYear : cc_exp_yr,
       cvv : cc_cvc,
       number : cc_num
    }
}, function(errData, data){

    if(errData){
        console.error("Error Message: " + errData.data.error.message);
        // handle the error
        return;
    }

    console.log("Payment Status: " + data.paymentStatus);
});
