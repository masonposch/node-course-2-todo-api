const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

// var id = '5b5ff0b5f2daf118dfac0fe711';


// if(!ObjecctID.isValid(id)) {
// 	console.log('ID not valid');
// }


// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log("Todos:", todos)
// });


// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log("Todo:", todo)
// });


// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log("ID not found");
// 	}
// 	console.log("Todo by id:", todo)
// }).catch((e) => console.log(e));