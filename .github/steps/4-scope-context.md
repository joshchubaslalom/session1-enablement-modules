# Module 4: Scope & Context Control

Sometimes you have too much context, or conflicting context. **Scope Control** is about managing what Copilot sees.

## Your Task

1.  We have created two files for you (you will create them now):
    *   `src/legacy/logger.js` (Old, deprecated way)
    *   `src/modern/logger.js` (New, preferred way)

    Create `src/legacy/logger.js`:
    ```javascript
    // DEPRECATED
    function log(msg) {
        console.log("LEGACY: " + msg);
    }
    module.exports = log;
    ```

    Create `src/modern/logger.js`:
    ```javascript
    // NEW WAY
    const log = (msg) => {
        console.log(`[MODERN] ${new Date().toISOString()}: ${msg}`);
    };
    module.exports = log;
    ```

2.  **Close** `src/legacy/logger.js`.
3.  **Open** `src/modern/logger.js`.
4.  Create a new file `src/app.js`.
5.  Ask Copilot to "log a startup message".
6.  Because you have the modern logger open, Copilot should suggest using that one.
7.  Ensure `src/app.js` uses the modern logger.

```javascript
// src/app.js
const log = require('./modern/logger');

log("App started");
```

8.  Commit and push your changes.

```bash
git add src/legacy/logger.js src/modern/logger.js src/app.js
git commit -m "Add loggers and app"
git push
```
