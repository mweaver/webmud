let Room = require('./room');
let Player = require('./player');

class World {

    constructor() {

        let room = new Room();
        let player = new Player(1, 'Mitch');

        room.players.push(player);
        this.rooms = [room];

    }

    serve() {
        return this.rooms[0].players[0].name + ' ' + this.rooms[0].description;
    }
}

module.exports = new World();