const express = require('express')
const app = express()
const chalk = require('chalk')
const morgan = require('morgan')
const nunjucks = require('nunjucks')


app.use(morgan('tiny'))


const people = [
		{
			name: "Gandolf"
		},
		{
			name: "Frodo"
		},
		{
			name: "Hermione?!?!?!!"
		}
	]

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true })


app.use('/', function(req, res, next){
	console.log(chalk.magenta.bgBlue.bold(req.method, req.url, res.statusCode))
	next()
})


app.use('/hal', function(req, res, next){
	console.log(chalk.magenta.bgCyan.bold('Hal'))
	next()
})


app.get('/', function(req, res){
	res.render('index', { title: 'Lord of the Rings??', people: people } )
})

app.get('/hal', function(req, res){
	res.send('hi hal!!!')
})


app.listen(3000, function(){
	console.log('App listening on port 3000!!!!! : )')
})