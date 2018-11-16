class Character {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.currentRoom = 0;
    }

    look() {
        return this.currentRoom.description;
    }

    move(room) {
        this.currentRoom = room;
        room.addCharacter(this);
        this.look();
    }
}

module.exports = Character;
