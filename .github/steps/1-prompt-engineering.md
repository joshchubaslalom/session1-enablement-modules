# Module 1: Prompt Engineering Fundamentals

Welcome to Module 1! In this module, we will focus on the basics of Prompt Engineering. The quality of the output you get from an AI coding assistant is directly related to the quality of the input (prompt) you provide.

## The 4 S's of Prompting
1.  **Single**: Focus on a single task or concept.
2.  **Specific**: Be specific about what you want.
3.  **Short**: Keep it concise but descriptive.
4.  **Surround**: Use surrounding code (context) to guide the AI.

## Your Task

1.  Create a new file named `src/fibonacci.js`.
2.  Use GitHub Copilot to generate a function that calculates the Fibonacci sequence.
3.  Try different prompts to see how the output changes.
    *   *Vague*: "fib sequence"
    *   *Specific*: "Write a recursive function to calculate the nth Fibonacci number with memoization."
4.  Ensure the file exports the function named `fibonacci`.

Example:
```javascript
// src/fibonacci.js
function fibonacci(n, memo = {}) {
    // ... implementation
}

module.exports = fibonacci;
```

5.  Commit and push your changes to the `main` branch.

```bash
git add src/fibonacci.js
git commit -m "Add fibonacci function"
git push
```
