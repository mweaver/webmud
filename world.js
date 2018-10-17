let Room = require('./room');
let characters = require('./registeredCharacters');

class World {

    constructor() {

        let room1 = new Room(1, { e: 2 });
        let room2 = new Room(2, { w: 1 });

        // Get random character for now
        let characterIndex = Math.floor(Math.random() * characters.length);
        this.character = characters.find(x => x.id === characterIndex);

        room1.addCharacter(this.character);
        this.rooms = [room1, room2];

    }

    serve() {
        return this.rooms[0].render();
    }
}

module.exports = new World();