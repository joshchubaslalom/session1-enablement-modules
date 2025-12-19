/**
 * Calculates the area of a circle given its radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle.
 */
const calculateCircleArea = (radius) => {
    if (radius < 0) {
        throw new Error('Radius cannot be negative');
    }
    return Math.PI * Math.pow(radius, 2);
};

module.exports = {
    calculateCircleArea
};
