var fs = require('fs');
var room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET Travel View */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", room});
};

module.exports = {
    rooms
};