class Room {

    constructor(id, movementPaths) {
        this.id = id;
        this.title = 'The First Room';
        this.description = 'This is the first room.  There are many like it, but this one is mine.  You also see...';
        this.characters = [];
        this.movementPaths = movementPaths;
    }

    addCharacter(character) {
        this.characters.push(character);
    }

    render() {
        return `
        [${this.title}]
        ${this.description}
        Obvious paths: None
        Also present: ${this.characters[0].name}`;
    }
}

module.exports = Room;