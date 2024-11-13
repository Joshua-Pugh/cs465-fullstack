var fs = require('fs');
var meal = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals View */
const meals = (req, res) => {
    res.render('meals', { title: "Travlr Getaways", meal});
};

module.exports = {
    meals
};