const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

/**
 * GET /todos
 * Returns a list of todos.
 */
app.get('/todos', (req, res) => {
    res.json(todos);
});

/**
 * POST /todos
 * Adds a new todo.
 */
app.post('/todos', (req, res) => {
    const todo = req.body;
    if (!todo) {
        return res.status(400).json({ error: 'Todo content is required' });
    }
    todos.push(todo);
    res.status(201).json(todo);
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;
