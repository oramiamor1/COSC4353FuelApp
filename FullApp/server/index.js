const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//Du Code
app.post("/register", async (req, res) => {
    user = req.body.user;
    pass = req.body.pass;
    try {
      console.log(req.body)
      //this will encrypt the password once it is made
      const newTodo = await pool.query(
        `INSERT INTO UserCredentials VALUES(0001,'${user}',crypt('firstpass',gen_salt('${pass}'))); `
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

//William Code
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


//Duy Code
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