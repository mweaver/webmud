let roomRegistry = require('./roomRegistry');
let characters = require('./registeredCharacters');

class World {

    constructor() {

        this.character = characters.find(x => x.id === 1);

        //let anotherCharacter = characters.find(x => x.id === 2);

        this.rooms = roomRegistry;

        this.character.move(1);

    }

    serve() {
        return this.character.look();
    }
}

module.exports = new World();