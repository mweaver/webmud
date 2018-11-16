class Room {

    constructor({id = -1, title = '', description = '', movementPaths = {}}) {
        this.id = id;
        this.title = title;
        this.description = description;
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