let Room = require('./room');

let rooms = [
    new Room({
        id: 1,
        title: 'Beginning Room',
        description: 'You stand upon a free-floating platform within a void of darkness.  The endless blackness surrounds you on all sides, stretching out into infinity.',
        movementPaths: {e: 2}
    }),
    new Room({
        id: 2,
        title: 'Another Room',
        description: 'This is another room.  It is less interesting than the first.',
        movementPaths: {w: 1}
    }),
];

module.exports = rooms;