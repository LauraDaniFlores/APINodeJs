const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const misrutas = require('./routes/rutas'); 

const app = express(); 
const port = process.env.PORT || 8080; 


app.use(cors()); 
app.use(bodyParser.urlencoded({ extended:false})); 
app.use(bodyParser.json());
app.use('/', misrutas); 


app.listen(port, () => {
console.log(`hola servidor ejecucion en http://localhost:${port}`);
})