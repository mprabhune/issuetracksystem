//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connecting to mongo
mongoose.connect('mongodb://localhost:27017/issuetrack');

mongoose.connection.on('connected',()=>{
	console.log('connected to Mukund mongo')
});

mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('Error in Mukund database connection:'+err);
	}
});

//port number
const port = 3000;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);
//testing server
app.get('/',(req,res)=>{
	res.send('Here is foobar');
})

app.listen(port,()=>{
	console.log('Mukund Server started at port:'+port);
})