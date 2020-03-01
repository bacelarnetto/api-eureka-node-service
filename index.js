const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const eurekaHelper = require('./eureka-helper');

app.listen(PORT, () => {
  console.log("api-node-service on 3000");
})

app.get('/', (req, res) => {
 res.json("I am api-node-service")
})
eurekaHelper.registerWithEureka('api-node-service', PORT);
