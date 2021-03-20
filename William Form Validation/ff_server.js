const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { check, validationResult } = require('express-validator')

let urlencoded = express.urlencoded({extended: true})
app.use(express.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/'))

app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/fuelform.html'))
})

app.post('/regisData',[
    check('gallonreq')
    .not().isEmpty().withMessage('Gallons requested cannot be empty.')
    .isLength({
        max:50
    }).withmessage('50 characters max for gallons requsted.')
    .trim(),

    //from profile

    //check('deliveryadr')
    //.not().isEmpty().withMessage('Address cannot be empty.')
    //.isLength({
    //    max:100
    //}).withMessage('100 characters max for address.'),

    check('ddate')
    .not().isEmpty().withMessage('Delivery date must be selected.'),

  ] ,(request, response) => {
      const errors = validationResult(request);

      if(!errors.isEmpty()){
          return response.status(422).json({errors: errors.array()});
      }
      response.status(202).json({
          success:'Ok'
      })
  })

  app.listen(port, () => console.log('server running'))
