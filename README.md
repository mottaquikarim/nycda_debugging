# Debugging Practice

This TodoList Express server has several intentional bugs. Using your terminal and any other method you find appropriate, find all the bugs.

## API Documentation

Reference docs for testing.

### GET /api/todos
Returns all todos that exist in the database.

**Sample call**:
```bash
$ curl -X GET "/api/todos"
```

**Expect**:
```js
[{
    “id”:1488734546551,
    ”data”:{
        “todo”:”wake up”,
        ”when”:1488766946489,
        ”isDone”:true
    }
}]
```

### POST /api/todos
Add a new todo to the database

**Sample call**:
```bash
$ curl -X POST -d '{"todo": "drank", "when": 1488767212140}' "/api/todos"
```

**Expect**:
```js
[{
    “id”:1488734546551,
    ”data”:{
        “todo”:”wake up”,
        ”when”:1488766946489,
        ”isDone”:true
    }
}, {
    “id”:1488776646784,
    ”data”:{
        “todo”:”drank”,
        ”when”:1488767212140,
        ”isDone”:false
    }
}]
```

Notice that for this call, the expected response is the full list of all items in the todo-list

### PUT /api/todo/:id
Update a specific todo-list item in the database

**Sample call**:
```bash
$ curl -X PUT -d '{"isDone": false}' "/api/todo/1488734546551"
```

**Expect**:
```js
[{
    “id”:1488734546551,
    ”data”:{
        “todo”:”wake up”,
        ”when”:1488766946489,
        ”isDone”:false
    }
}, {
    “id”:1488776646784,
    ”data”:{
        “todo”:”drank”,
        ”when”:1488767212140,
        ”isDone”:false
    }
}]
```

Notice that for this call, the first item’s isDone property has become set to false.

### DELETE /api/todo/:id
Delete a specific todo-list item in the database

**Sample call**:
```bash
$ curl -X DELETE "/api/todo/1488734546551"
```

**Expect**:
```js
[{
    “id”:1488776646784,
    ”data”:{
        “todo”:”drank”,
        ”when”:1488767212140,
        ”isDone”:false
    }
}]
```
