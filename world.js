let Room = require('./room');
let registeredPlayers = require('./registeredPlayers');

class World {

    constructor() {

        let room = new Room();

        let playerIndex = Math.floor(Math.random() * registeredPlayers.length);

        let player = registeredPlayers.find(x => x.id === playerIndex);

        room.players.push(player);
        this.rooms = [room];

    }

    serve() {
        return this.rooms[0].players[0].name + ' ' + this.rooms[0].description;
    }
}

module.exports = new World();