const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../lib/tweet-bank');
const chalk = require('chalk')
const socketio = require('socket.io')



router.use('/stylesheets', express.static('public/stylesheets'))
router.use('/assets', express.static('public/assets'))
router.use('/client', express.static('client'))



router.use('/', function(req, res, next){
	console.log(chalk.magenta.bgBlue.bold(req.method, req.url, res.statusCode))
	next()
})


module.exports = function(io){

	
	router.get('/', function (req, res) {
	  let tweets = tweetBank.list();
	  res.render( 'index', { tweets: tweets, showForm: true } );
	});


	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var tweets = tweetBank.find( { name: name } );
	  res.render( 'user', { name: name, tweets: tweets } );
	});


	router.get('/tweet/:id', function(req, res) {
		var id = req.params.id
	  var tweets = tweetBank.find( { id: id } );
	  res.render( 'index', { tweets: tweets } );
	});

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
		io.sockets.emit('newTweet', { tweets: req.body });
	  tweetBank.add(name, text);
	  res.end()
	});
	
	return router
}