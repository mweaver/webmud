let roomRegistry = require('./roomRegistry');

class Character {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.currentRoom = 0;
    }

    look() {
        return this.currentRoom.render();
    }

    move(id) {
        let room = roomRegistry.find(room => room.id === id);
        this.currentRoom = room;
        room.addCharacter(this);
        this.look();
    }
}

module.exports = Character;
