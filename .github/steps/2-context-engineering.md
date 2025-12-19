# Module 2: Context Engineering via Code

Great job on Module 1! Now let's talk about **Context Engineering**.

Copilot uses the open files in your editor as context. This means you can guide Copilot by keeping relevant files open.

## Your Task

1.  Create a file `src/user.js` with a `User` class.
    ```javascript
    class User {
        constructor(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
    }
    module.exports = User;
    ```
2.  Now, keep `src/user.js` OPEN in your editor.
3.  Create a new file `src/userService.js`.
4.  Ask Copilot to create a `UserService` class that manages users.
    *   Prompt: "Create a UserService class with methods to add, get, and delete users."
5.  Notice how Copilot automatically imports the `User` class because it was open in your context!
6.  Ensure `src/userService.js` exports the `UserService` class.

```javascript
// src/userService.js
const User = require('./user');

class UserService {
    // ... implementation
}

module.exports = UserService;
```

7.  Commit and push your changes.

```bash
git add src/user.js src/userService.js
git commit -m "Add User and UserService"
git push
```
