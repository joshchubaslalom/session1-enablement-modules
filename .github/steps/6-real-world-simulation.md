# Module 6: Real-World Simulation

Congratulations on making it this far! Now, let's put it all together in a **Real-World Simulation**.

## Your Task

You need to build a simple Express.js API for a "Todo List" application.

1.  Create a file `src/server.js`.
2.  Use Copilot to scaffold an Express server.
3.  Add the following endpoints:
    *   `GET /todos`: Return a list of todos.
    *   `POST /todos`: Add a new todo.
4.  Use your **Prompt Engineering** skills to get the structure right.
5.  Use **Context Engineering** (maybe keep `src/user.js` open if you want to associate todos with users, though not strictly required here).
6.  Follow your **Instructions** (arrow functions, comments).
7.  **Iterate** if the code isn't perfect (e.g., ensure body parsing is enabled).

```javascript
// src/server.js
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

/**
 * Get all todos
 */
app.get('/todos', (req, res) => {
    res.json(todos);
});

/**
 * Add a new todo
 */
app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app; // Export for testing
```

8.  Commit and push your changes.

```bash
git add src/server.js
git commit -m "Add express server"
git push
```

**You have completed the course!**
