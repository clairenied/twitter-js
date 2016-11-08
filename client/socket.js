// Load the socket.io library above, then connect to the server.
// Because the socket.io server is being run on the same server as your 
// Express instance, you can connect() without any arguments.
var socket = io.connect();
socket.on('connect', function(){
  console.log('connected to server via WebSockets!');
});
// When 'new_tweet' events are fired, do something with the packaged tweet
socket.on('newTweet', function (tweet) { 
  console.log(tweet);
  alert('Refreshing... check the console...');
  // some logic to add the new tweet to the DOM…
}); 

$("submit-tweet-button").on('click', function(tweet){

})