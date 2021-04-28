const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const pool = require("./db");
const { check, validationResult } = require('express-validator')

//middleware
app.use(cors());
app.use(express.json()); //req.body

let urlencoded = express.urlencoded({extended: true})
app.use(express.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/'))

//Du Code
app.post("/register", async (req, res) => {
    userid = req.body.userid;
    user = req.body.user;
    pass = req.body.pass;
    try {
      console.log(req.body)
      //this will encrypt the password once it is made
      const newTodo = await pool.query(
        `INSERT INTO UserCredentials VALUES(${userid},'${user}',crypt('${pass}',gen_salt('bf'))); `
      );
  
    } catch (err) {
      console.error(err.message);
    }
});

app.get('/login/:fac', async (req, res) => {
  const { fac } = req.params;
  var user = fac.split(',')[0];
  var pass = fac.split(',')[1];
  try {
    console.log(req.body)
    //find if login info is correct
    const newTodo = await pool.query(
      `select count(userid) from usercredentials where loginid = '${user}' and password = crypt('${pass}',password); `
    );

    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/uid', async (req, res) => {

  try {
    console.log(req.body)
    //search for latest userID
    const newTodo = await pool.query(
      `select userid from usercredentials order by userid desc limit 1;`
    );

    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//William Code
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
    console.log(`INSERT INTO FuelQuote VALUES(0001,'${gallonsrequested}','${deliveryaddress}','${deliverydate}'); `)
    const newTodo = await pool.query(
      `INSERT INTO FuelQuote VALUES(0001,'${gallonsrequested}','${deliveryaddress}','${deliverydate}'); `
    );

  } catch (err) {
    console.error(err.message);
  }
});


//Duy Code
app.get('/',(request, response) => {
  response.sendFile(path.join(__dirname + '/profile_dv.html'))
})

app.post('/formData',[
  check('fullname')
  .not().isEmpty().withMessage('Name cannot be empty.')
  .isLength({
      max:50
  }).withMessage('50 characters max for full name.')
  .trim(),

  check('address')
  .not().isEmpty().withMessage('Address cannot be empty.')
  .isLength({
      max:100
  }).withMessage('100 characters max for address.'),

  check('address2')
  .isLength({
      max:100
  }).withMessage('100 characters max for address 2.'),

  check('city')
  .not().isEmpty().withMessage('City cannot be empty.')
  .isLength({
      max:100
  }).withMessage('100 characters max for city.'),

  check('zipcode')
  .isPostalCode('US').withMessage('not a valid US Zipcode.')
  .isLength({
      min:5,
      max:9
  }).withMessage('Minimum of 5 characters and Maximum of 9 characters for Zipcode.')
] ,(request, response) => {
  const errors = validationResult(request);

  if(!errors.isEmpty()){
      return response.status(422).json({errors: errors.array()});
  }
  response.status(202).json({
      success:'Ok'
  })
})


//ROUTES//
app.post("/profile", async (req, res) => {
  fullname = req.body.name;
  address = req.body.add;
  address2 = req.body.add2;
  city = req.body.city;
  state = req.body.state;
  zipcode = req.body.zip; 
  console.log("work?");
  try {
    console.log(req.body)
    console.log(`INSERT INTO ClientInformation VALUES(0001,'${fullname}','${address}','${address2}','${city}','${state}','${zipcode}'); `)
    const newTodo = await pool.query(
      `INSERT INTO ClientInformation VALUES(0001,'${fullname}','${address}','${address2}','${city}','${state}','${zipcode}'); `
    );

    //res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});