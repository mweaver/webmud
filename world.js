let Room = require('./room');
let characters = require('./registeredCharacters');

class World {

    constructor() {

        let room1 = new Room(1, { e: 2 });
        let room2 = new Room(2, { w: 1 });

        // Get random character for now
        // let characterIndex = Math.floor(Math.random() * characters.length);
        this.character = characters.find(x => x.id === 1);
        let anotherCharacter = characters.find(x => x.id === 2);

        this.rooms = [room1, room2];

        this.character.move(room1);

        console.log(room1);

    }

    serve() {
        return this.rooms[0].render();
    }
}

module.exports = new World();