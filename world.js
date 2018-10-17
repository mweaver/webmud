let Room = require('./room');
let registeredPlayers = require('./registeredPlayers');

class World {

    constructor() {

        let room = new Room();

        // Get random player for now
        let playerIndex = Math.floor(Math.random() * registeredPlayers.length);
        this.player = registeredPlayers.find(x => x.id === playerIndex);

        room.addPlayer(this.player);
        this.rooms = [room];

    }

    serve() {
        return this.rooms[0].render();
    }
}

module.exports = new World();