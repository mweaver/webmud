class Room {

    constructor() {
        this.id = 1;
        this.title = 'The First Room';
        this.description = 'This is the first room.  There are many like it, but this one is mine.  You also see...';
        this.characters = [];
    }

    addPlayer(player) {
        this.characters.push(player);
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