const _ = require('lodash')

var data = []

var currentId = 2000000

function generateId (){
	currentId++
	return currentId
}

function add (name, content){
	data.push({ name: name, content: content, id: generateId().toString()})
}


function list (){
	return _.cloneDeep(data)
}


function find(properties){
	return _.cloneDeep(_.filter(data, properties))
}


module.exports = { add: add, list: list, find: find }

module.exports.add( 'Hal', "Fullstack Academy is amazing! The instructors are just so sweet #fullstacklove #codedreams")
module.exports.add( 'Zeke', "Fullstack Academy is amazing! The instructors are just so sweet #fullstacklove #codedreams")


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  let fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff', 'Hal', 'Zeke'];
  let fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  let awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}


console.log(data)