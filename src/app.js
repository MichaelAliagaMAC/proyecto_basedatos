const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');
const usersRouter = require('./routes/users.router'); 
const personsRouter = require('./routes/persons.router')

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Ejecutandose mi Servidor');
});

//app.use('/', routerApi); 
app.use('/users', usersRouter); 
app.use('/persons', personsRouter)

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
