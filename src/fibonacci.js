/**
 * Calculates the nth Fibonacci number using recursion and memoization.
 * @param {number} n - The position in the Fibonacci sequence.
 * @param {Object} memo - The memoization object.
 * @returns {number} - The nth Fibonacci number.
 */
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

module.exports = fibonacci;
