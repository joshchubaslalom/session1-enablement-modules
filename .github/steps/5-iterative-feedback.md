# Module 5: Iterative Feedback Loops

AI doesn't always get it right the first time. **Iterative Feedback** is the process of refining the output.

## Your Task

1.  Create a file `src/emailValidator.js`.
2.  Ask Copilot: "Write a function to validate an email address."
3.  Review the code. It probably uses a simple regex.
4.  **Iterate**: Ask Copilot to "Update the regex to strictly allow only .com and .org domains."
5.  **Iterate again**: "Handle null or undefined inputs gracefully."
6.  Ensure the final function meets all these criteria.

```javascript
// src/emailValidator.js
const validateEmail = (email) => {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.(com|org)$/;
    return regex.test(email);
};

module.exports = validateEmail;
```

7.  Commit and push your changes.

```bash
git add src/emailValidator.js
git commit -m "Add email validator"
git push
```
