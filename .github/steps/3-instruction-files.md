# Module 3: Instruction Files & Workspace Context

You're doing great! Next, let's look at **Instruction Files**.

You can provide global instructions to Copilot using a `.github/copilot-instructions.md` file. This is useful for enforcing coding standards or project-specific patterns.

## Your Task

1.  Create a file named `.github/copilot-instructions.md`.
2.  Add the following content to it:
    ```markdown
    Always use arrow functions for function definitions.
    Always add JSDoc comments to functions.
    ```
3.  Now, create a new file `src/mathUtils.js`.
4.  Ask Copilot to create a function to calculate the area of a circle.
    *   Prompt: "Calculate area of a circle"
5.  Verify that Copilot generates an **arrow function** and includes **JSDoc comments**, following your instructions.
6.  Ensure `src/mathUtils.js` exports the function.

```javascript
// src/mathUtils.js
/**
 * Calculates the area of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} The area of the circle.
 */
const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
};

module.exports = { calculateCircleArea };
```

7.  Commit and push your changes.

```bash
git add .github/copilot-instructions.md src/mathUtils.js
git commit -m "Add instructions and mathUtils"
git push
```
