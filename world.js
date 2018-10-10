class World {
    constructor() {
        //this.rooms = [new Room()];
    }

    serve() {
        return 'This is a test of the World module.';
    }
}

module.exports = new World();