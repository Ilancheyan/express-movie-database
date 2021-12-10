const {sequelize, DataTypes, Model} = require('./db')

class Movie extends Model {}

Movie.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

module.exports = {Movie}