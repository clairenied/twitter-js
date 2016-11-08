const express = require('express')
const app = express()
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const tweetbank = require('./lib/tweet-bank')
const routes = require('./routes')
const bodyParser = require('body-parser')
const socketio = require('socket.io')

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const people = [
		{
			name: "Gandolf",
			hasHamburger: false
		},
		{
			name: "Frodo",
			hasHamburger: true
		},
		{
			name: "Hermione?!?!?!!",
			hasHamburger: false
		}
	]

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true })

const server = app.listen(3000, function(){
	console.log('App listening on port 3000!!!!! : )')
})

const io = socketio.listen(server);
app.use('/', routes(io))