const express = require('express');

const router = express.Router();

const TodoList = require('./todoList')


// body parser middleware
const parser = require('body-parser');

//define a route on `/hello/world`
router.get('/todos',(request, response, next) => {
});


// post todos
router.post('/todos', (request, response, next) => {
	const requestBody = request.body;

	// Add a post
	TodoList.createItem(requestBody);

	next();

});

// put todo
router.put('/todo/:id', (request, response, next) => {
	const id = request.params.id;
	const dataPayload = request.body;

	TodoList.updateItem(id, 'data.isDone', dataPayload.isDone);

	next();
}); // todo

// delete todo
router.delete('/todo/:id', (request, response, next) => {
	const id = request.params.id;

	TodoList.deleteItem(id);

	next();
}); // delete

router.use((request, response) => {
	response.header('Content-Type', 'application/json');
	response.send(TodoList.getItems());	
});

module.exports = router;





