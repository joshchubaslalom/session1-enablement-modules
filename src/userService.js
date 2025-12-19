const User = require('./user');

class UserService {
    constructor() {
        this.users = new Map();
    }

    /**
     * Adds a user to the service.
     * @param {User} user - The user to add.
     */
    addUser(user) {
        if (!user || !user.id) {
            throw new Error('User must have a valid id');
        }
        this.users.set(user.id, user);
    }

    /**
     * Retrieves a user by id.
     * @param {string|number} id - The user id.
     * @returns {User} - The user object.
     */
    getUser(id) {
        return this.users.get(id);
    }

    /**
     * Deletes a user by id.
     * @param {string|number} id - The user id.
     * @returns {boolean} - True if the user was deleted, false otherwise.
     */
    deleteUser(id) {
        return this.users.delete(id);
    }
}

module.exports = UserService;
