//import express /body-parser
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {listBanksController,
       updateBankController,
       createBankController,
       deleteBankController,
       createAccountController,
       listAccountController} = require('./controllers');



//create express instance
let server = express();




//middlewares
server.use(bodyParser.json());





//routes
//view banks - get method
server.get('/banks/:id?', listBanksController);
//create bank - post method
server.post('/bank',createBankController);
// //update bank - put method
server.put('/bank',updateBankController);

// //delete bank - delete method                        
server.delete('/bank',deleteBankController);

server.post('/account',createAccountController);
server.get('/accounts', listAccountController)


// connect to database and start server

 mongoose.connect("mongodb+srv://codetrainCampUser:mother.com@cluster0.s56xn.mongodb.net/codetrainCamp?retryWrites=true&w=majority",
 {useNewUrlParser:true,useUnifiedTopology:true})
 .then(result =>{
    server.listen(3000, () => console.log('server is ready'));
 }).catch(err => console.log(err));
