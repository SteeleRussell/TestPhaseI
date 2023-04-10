const fs = require('fs');

fs.readFile('./customer.json', 'utf-8', (err,jsonString) =>{
   console.log(jsonString);
});
