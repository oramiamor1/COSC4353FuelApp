const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { check, validationResult } = require('express-validator')

//
const cors = require("cors");
const pool =require("./db");
//middleware
app.use(cors());

let urlencoded = express.urlencoded({extended: true})
app.use(express.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/'))

app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/fuelform.html'))
})

app.post('/formData',[
    check('gallonsreq')
    .not().isEmpty().withMessage('Name cannot be empty.')
    .isLength({
        max:50
    }).withMessage('50 numbers max for gallons required.')
    .trim(),

    check('deliveryadr')
    .not().isEmpty().withMessage('Delivery address cannot be empty.')
    .isLength({
        max:100
    }).withMessage('100 characters max for address.'),

    check('ddate')
    .not().isEmpty().withMessage('Delivery date cannot be empty.'),

] ,(request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(422).json({errors: errors.array()});
    }
    response.status(202).json({
        success:'Ok'
    })
})

app.post("/fuelform", async (req, res) => {
    gallonsrequested = req.body.gallonsreq;
    deliveryaddress = req.body.deliveryadr;
    deliverydate = req.body.ddate;
    console.log("work?");
    try {
      console.log(req.body)
      console.log(`INSERT INTO ClientInformation VALUES(0001,'${gallonsreq}','${deliveryadr}','${ddate}'); `)
      const newTodo = await pool.query(
        `INSERT INTO ClientInformation VALUES(0001,'${gallonsreq}','${deliveryadr}','${ddate}'); `
      );
  
    } catch (err) {
      console.error(err.message);
    }
});

app.listen(port, () => console.log('server running'))

