const express = require('express')
const app = express()
const chalk = require('chalk')
const morgan = require('morgan')


app.use(morgan('tiny'))


app.use('/', function(req, res, next){
	console.log(chalk.magenta.bgBlue.bold(req.method, req.url, res.statusCode))
	next()
})


app.use('/hal', function(req, res, next){
	console.log(chalk.magenta.bgCyan.bold('Hal'))
	next()
})


app.get('/', function(req, res){
	res.send('Welcome')
})

app.get('/hal', function(req, res){
	res.send('hi hal!!!')
})


app.listen(3000, function(){
	console.log('App listening on port 3000!!!!! : )')
})