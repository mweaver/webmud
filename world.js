let Room = require('./room');

class World {
    constructor() {
        this.rooms = [new Room()];
    }

    serve() {
        return this.rooms[0].description;
    }
}

module.exports = new World();